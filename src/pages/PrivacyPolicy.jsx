import React from "react";

function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 h-screen">
      <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
      <p>
        This Privacy Policy explains how [Your Website Name] collects, uses, and discloses information about you when you use our website and services. 
      </p>
      <h2 className="text-3xl font-semibold mt-8">Information We Collect</h2>
      <p>
        We may collect the following types of information:
      </p>
      <ul>
        <li>Personal Information: 
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Mailing address</li>
            <li>Demographic information (e.g., age, gender)</li>
          </ul>
        </li>
        <li>Usage Data: 
          <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
            <li>Referrer URL</li>
          </ul>
        </li>
      </ul>
      <h2 className="text-3xl font-semibold mt-8">How We Use Your Information</h2>
      <p>
        We may use your information to:
      </p>
      <ul>
        <li>Provide and maintain our services</li>
        <li>Improve our services</li>
        <li>Communicate with you</li>
        <li>Personalize your experience</li>
        <li>Analyze website usage</li>
        <li>Conduct market research</li>
        <li>Comply with legal obligations</li>
      </ul>
      <h2 className="text-3xl font-semibold mt-8">Data Security</h2>
      <p>
        We take reasonable measures to protect your information from unauthorized access, use, and disclosure. However, no method of transmission over the internet or method of electronic storage is completely secure.
      </p>
      <h2 className="text-3xl font-semibold mt-8">Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </p>
      <h2 className="text-3xl font-semibold mt-8">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at [Your Email Address].
      </p>
    </div>
  );
}

export default PrivacyPolicy;