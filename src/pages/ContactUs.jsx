import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    inquiryType: "general",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here (e.g., API call or email handling).
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#DB0032]">
          Contact & Support
        </h1>
        <p className="text-lg mt-4 text-gray-600">
          Have questions, need assistance, or want to schedule a consultation? 
          We’re here to help!
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DB0032]"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DB0032]"
              required
            />
          </div>

          {/* Inquiry Type */}
          <div className="mb-4">
            <label htmlFor="inquiryType" className="block text-lg font-medium text-gray-700">
              Inquiry Type
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DB0032]"
            >
              <option value="general">General Inquiry</option>
              <option value="consultation">Consultation Request</option>
              <option value="support">Support Request</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DB0032]"
              rows="4"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:from-[#FA6602] hover:to-[#DB0032] text-white font-bold text-lg px-8 py-3 rounded-lg shadow-md transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Need Immediate Assistance?
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="/schedule-call"
            className="bg-[#DB0032] text-white font-bold text-lg px-6 py-3 rounded-lg shadow-md hover:bg-[#FA6602] transition-all"
          >
            Schedule a Call
          </a>
          <a
            href="/book-appointment"
            className="bg-[#FA6602] text-white font-bold text-lg px-6 py-3 rounded-lg shadow-md hover:bg-[#DB0032] transition-all"
          >
            Book an Appointment
          </a>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Prefer Live Support?
        </h2>
        <button
          className="bg-[#DB0032] text-white font-bold text-lg px-6 py-3 rounded-lg shadow-md hover:bg-[#FA6602] transition-all"
          onClick={() => alert("Live Chat Coming Soon!")}
        >
          Start Live Chat
        </button>
      </div>
    </div>
  );
}

export default Contact;
