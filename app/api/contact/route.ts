import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

// --- Configuration ---
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const GOOGLE_SHEETS_CREDENTIALS = process.env.GOOGLE_SHEETS_CREDENTIALS;
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || GMAIL_USER; // Default to sender if not specified

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, source } = body;

    // 1. Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Timestamp for logs and sheet
    const timestamp = new Date().toISOString(); 
    const humanTimestamp = new Date().toLocaleString();

    // 2. Google Sheets Integration
    try {
        if (GOOGLE_SHEETS_CREDENTIALS && SPREADSHEET_ID) {
            const auth = new google.auth.GoogleAuth({
                credentials: JSON.parse(GOOGLE_SHEETS_CREDENTIALS),
                scopes: ['https://www.googleapis.com/auth/spreadsheets'],
            });

            const sheets = google.sheets({ version: 'v4', auth });

            await sheets.spreadsheets.values.append({
                spreadsheetId: SPREADSHEET_ID,
                range: 'Sheet1!A:F', // Assumes "Sheet1" exists
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [
                        [humanTimestamp, name, email, phone, message, source || 'Website Form']
                    ]
                }
            });
            console.log('Data appended to Google Sheet');
        } else {
            console.warn('Google Sheets credentials or ID missing. Skipping sheet append.');
        }
    } catch (sheetError) {
        console.error('Error appending to Google Sheet:', sheetError);
        // We continue even if sheet fails, to at least send email
    }

    // 3. Nodemailer Integration
    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
        throw new Error('Gmail credentials are not configured.');
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: GMAIL_USER,
            pass: GMAIL_APP_PASSWORD,
        },
    });

    // Email to Admin
    const adminMailOptions = {
        from: `"${name}" <${GMAIL_USER}>`, // "John Doe" via OurApp <admin@gmail.com>
        to: ADMIN_EMAIL,
        replyTo: email, // Valid reply-to the user
        subject: `New Contact Form Submission: ${name}`,
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                <h2 style="color: #0049AC;">New Inquiry Received</h2>
                <p><strong>Source:</strong> ${source || 'Website'}</p>
                <hr style="border: 1px solid #eee; margin: 20px 0;" />
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong></p>
                <blockquote style="background: #f9f9f9; padding: 15px; border-left: 4px solid #0049AC;">
                    ${message.replace(/\n/g, '<br>')}
                </blockquote>
                <p style="font-size: 12px; color: #888; margin-top: 30px;">Received at ${humanTimestamp}</p>
            </div>
        `,
    };

    // Email to User (Auto-reply)
    const userMailOptions = {
        from: `"Techversity Admissions" <${GMAIL_USER}>`,
        to: email,
        subject: `We've received your inquiry, ${name.split(' ')[0]}!`,
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                <h2 style="color: #0049AC;">Thank you for contacting Techversity.ai!</h2>
                <p>Hi ${name.split(' ')[0]},</p>
                <p>We have successfully received your message regarding our university programs.</p>
                <p>One of our admissions advisors will review your inquiry and get back to you shortly (usually within 24 hours).</p>
                <br>
                <p>Best regards,</p>
                <p><strong>The Techversity Team</strong></p>
                <p><a href="https://techversity.ai" style="color: #0049AC;">www.techversity.ai</a></p>
            </div>
        `,
    };

    // Send both emails in parallel
    await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(userMailOptions)
    ]);

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error.message },
      { status: 500 }
    );
  }
}
