import React from "react";

const services = [
  {
    title: "Sales Force Evaluation",
    description:
      "Focused on analyzing salespeople, systems, and strategies to address key performance gaps.",
  },
  {
    title: "Recruiting Process Optimization",
    description:
      "Streamlining recruitment to attract and retain top-tier sales talent.",
  },
  {
    title: "Sales Candidate Assessments",
    description:
      "Leveraging advanced tools to identify high-potential hires.",
  },
  {
    title: "CRM Selection, Installation, and Integration",
    description:
      "Helping businesses choose and implement the right CRM system.",
  },
  {
    title: "Sales Process Optimization",
    description:
      "Designing structured, customized processes for better outcomes.",
  },
  {
    title: "Metrics Development",
    description:
      "Identifying KPIs and predictive indicators to drive revenue.",
  },
  {
    title: "Pipeline Management",
    description:
      "Building formal, staged, and criteria-based pipeline systems.",
  },
  {
    title: "Sales Management Development",
    description:
      "Training managers in coaching, motivation, and accountability.",
  },
  {
    title: "Trade Show Selling",
    description:
      "Turning event participation into measurable sales opportunities.",
  },
  {
    title: "Consulting & Strategy",
    description:
      "Offering market, account, and business strategy support.",
  },
  {
    title: "Coaching",
    description: "Executive and sales coaching to improve outcomes.",
  },
  {
    title: "Sales Training & Professional Services Training",
    description:
      "Results-focused training programs.",
  },
];

const Service = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Consulting & Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg mr-4 hover:bg-green-600 transition">
            Schedule a Consultation
          </button>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Service;
