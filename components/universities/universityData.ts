export interface University {
  id: number;
  name: string;
  location: string;
  website: string;
  about: string;
  programs: string[];
  features: string[];
  image: string;
}

export const universities: University[] = [
  {
    id: 1,
    name: "CC University",
    location: "United States",
    website: "https://ccuniversity.us",
    about:
      "US-based institution offering flexible higher education for working professionals, focused on practical application and leadership development.",
    programs: ["Honorary Doctorate", "DBA", "PhD/Doctorate"],
    features: [
      "US-based institution",
      "Flexible program delivery",
      "Focus on professional advancement",
      "International accessibility",
    ],
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1600&auto=format&fit=crop", // Modern university building
  },
  {
    id: 2,
    name: "Washington Digital University",
    location: "United States",
    website: "https://washingtondigitaluniversity.us",
    about:
      "Digital-first university delivering academically rigorous, technology-enabled programs for remote professionals.",
    programs: ["Honorary Doctorate", "DBA", "PhD/Doctorate"],
    features: [
      "Digital-native model",
      "Technology-enhanced learning",
      "Designed for remote professionals",
      "Modern higher education approach",
    ],
    image:
      "https://images.unsplash.com/photo-1497294815431-9365093b7331?q=80&w=1600&auto=format&fit=crop", // Digital/Tech office feel
  },
  {
    id: 3,
    name: "Euro-Asian University",
    location: "Estonia, Europe",
    website: "https://euroasianuniversity.ee",
    about:
      "European institution blending EU academic traditions with global professional needs, offering internationally recognized credentials.",
    programs: ["Honorary Doctorate", "DBA", "PhD/Doctorate"],
    features: [
      "European Union location",
      "International perspective",
      "Cross-cultural academic environment",
      "European education standards",
    ],
    image:
      "https://images.unsplash.com/photo-1549651717-3aa3d80dbbe9?q=80&w=1600&auto=format&fit=crop", // European architecture
  },
  {
    id: 4,
    name: "European School of Data Science and Technology (ESDST)",
    location: "European Union",
    website: "https://esdst.eu",
    about:
      "Specialized institution focused on data science, digital innovation, and technology-driven leadership programs.",
    programs: ["Honorary Doctorate", "DBA", "PhD/Doctorate"],
    features: [
      "Technology-focused specialization",
      "Data-driven curriculum",
      "Contemporary program design",
      "EU-based institution",
    ],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop", // Tech lab/Modern collaborative space
  },
];
