import React from "react";

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Learn</h3>
            <p className="text-gray-600">
              Access top-quality interactive courses.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Build</h3>
            <p className="text-gray-600">Work on real-world projects.</p>
          </div>
          {/* Feature 3 */}
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Connect</h3>
            <p className="text-gray-600">Join a community of learners.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
