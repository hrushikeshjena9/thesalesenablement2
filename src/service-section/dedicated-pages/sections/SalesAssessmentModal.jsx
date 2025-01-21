import React, { useState } from "react";

const SalesAssessmentModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        onClick={toggleModal}
      >
        Let's Begin
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 overflow-y-auto h-[80vh]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Sales Assessment</h2>
              <button
                className="text-gray-600 hover:text-gray-900"
                onClick={toggleModal}
              >
                ✖
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              <div>
                <label className="block text-gray-700">Business Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              <div className="space-y-2">
                {[
                  "Do you have a formal sales process that everyone follows?",
                  "Are your salespeople effective at selling value?",
                  "Do your salespeople use Consultative selling strategies?",
                  "Do you have a formal sales recruiting process that consistently yields top performing salespeople?",
                  "Do you use sales specific pre-hire assessments?",
                  "Do you have a formal 90-day onboarding process that prepares salespeople for success in your company?",
                  "Does your pipeline accurately predict future revenue?",
                  "Are your probabilities based on science? (As opposed to gut feel)",
                  "Are there enough opportunities in your pipeline?",
                  "Do you know the activities you need to focus on to consistently overachieve?",
                  "Have you identified all the leading KPI's that drive sales?",
                  "Do you conduct a weekly personal review with each of your salespeople?",
                  "Does your sales manager know what motivates each individual in his/her team?",
                  "Do your incentive plans drive the right behaviour?",
                  "Does your sales manager have scheduled weekly coaching calls with their team members?",
                  "Do you know how effective your Sales Managers are at coaching?",
                  "Do you know what potential can be unlocked from your team?",
                  "Do you have a clearly articulated Sales Strategy to get your unfair share of your market against your competitors?",
                  "Can your sales team execute on your Sales Strategies moving forward?",
                  "Can your sales team clearly differentiate themselves from your competition?",
                  "Is your salespeople's “Will To Sell” strong enough?",
                  "Do your salespeople have a supportive mindset?",
                  "Does your current sales culture support your business growth goals?",
                  "Do your Sales Managers have a supportive mindset?",
                ].map((question, index) => (
                  <div key={index} className="flex flex-col space-y-1">
                    <label className="text-gray-700">{question}</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name={`question-${index}`}
                          value="Yes"
                          className="form-radio"
                        />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name={`question-${index}`}
                          value="No"
                          className="form-radio"
                        />
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesAssessmentModal;
