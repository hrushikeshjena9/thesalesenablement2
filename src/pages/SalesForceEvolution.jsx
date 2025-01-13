import React, { useState } from "react";

const SalesForceEvaluation = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">
          Evaluate Your Sales Force Performance with Confidence
        </h1>
        <p className="mt-4 text-lg">
          Uncover performance gaps, enhance productivity, and make data-driven
          decisions with our comprehensive Sales Force Evaluation Tool.
        </p>
        <button
          className="mt-8 px-6 py-3 bg-white text-red-600 font-semibold rounded-lg shadow hover:bg-gray-200"
          onClick={() => {
            document.getElementById("evaluation-tool").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Get Started Now
        </button>
      </header>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Use the Sales Force Evaluation Tool?
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-start">
            <span className="text-3xl mr-4">📈</span>
            <p>
              <strong>Identify Performance Gaps:</strong> Gain insights into
              individual and team performance metrics.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-3xl mr-4">🎯</span>
            <p>
              <strong>Enhance Strategic Decision-Making:</strong> Use actionable
              insights to align team goals with organizational objectives.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-3xl mr-4">🔍</span>
            <p>
              <strong>Improve Hiring Efficiency:</strong> Assess candidate fit
              and competency for specific sales roles.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-3xl mr-4">🚀</span>
            <p>
              <strong>Boost Productivity:</strong> Provide tailored feedback to
              improve sales techniques and results.
            </p>
          </div>
        </div>
      </section>

      {/* Evaluation Tool Section */}
      <section id="evaluation-tool" className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">
          Evaluate and Optimize Your Sales Force
        </h2>
        <form
          onSubmit={handleFormSubmit}
          className="max-w-3xl mx-auto space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number (optional)"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
          />
          <select
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
            required
          >
            <option value="" disabled selected>
              Current Role
            </option>
            <option>Sales Manager</option>
            <option>Sales Representative</option>
            <option>Other</option>
          </select>
          <textarea
            placeholder="Additional Comments"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
          />
          <button
            type="submit"
            className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
          >
            Submit and Get Your Results
          </button>
        </form>
        {formSubmitted && (
          <p className="mt-4 text-center text-green-600">
            Thank you! Your results will be shared with you shortly.
          </p>
        )}
      </section>

      {/* Lead Capture Form Section */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          Ready to Transform Your Sales Force?
        </h2>
        <form
          onSubmit={handleFormSubmit}
          className="max-w-3xl mx-auto space-y-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-300"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-300"
            required
          />
          <input
            type="text"
            placeholder="Company Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-300"
          />
          <select
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-300"
            required
          >
            <option value="" disabled selected>
              Industry
            </option>
            <option>Technology</option>
            <option>Healthcare</option>
            <option>Retail</option>
          </select>
          <textarea
            placeholder="Additional Comments"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-300"
          />
          <button
            type="submit"
            className="w-full py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700"
          >
            Schedule a Consultation
          </button>
        </form>
      </section>
    </div>
  );
};

export default SalesForceEvaluation;
