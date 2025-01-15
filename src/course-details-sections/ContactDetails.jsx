import React from 'react';
import { Disclosure } from '@headlessui/react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaFileAlt } from 'react-icons/fa';

const ContactDetails = () => {
  const contactInfo = [
    {
      title: "Primary Contact",
      name: "Jane Smith",
      role: "Sales Manager",
      email: "jane.smith@example.com",
      phone: "(555) 123-4567",
      address: "1234 Main St, Springfield, IL",
      notes: [
        "Follow up on the last meeting regarding the new product launch.",
        "Interested in bulk purchase options.",
        "Prefers communication via email."
      ],
    },
    {
      title: "Secondary Contact",
      name: "John Doe",
      role: "Account Executive",
      email: "john.doe@example.com",
      phone: "(555) 987-6543",
      address: "5678 Oak Ave, Springfield, IL",
      notes: [
        "Key decision-maker for pricing discussions.",
        "Has already attended the demo session.",
        "Looking for a detailed proposal."
      ],
    },
  ];

  return (
    <div className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-lg">
      <h1 className="uppercase text-3xl font-bold text-center mb-8">Contact Details</h1>

      {contactInfo.map((contact, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold text-gray-800">{contact.title}</h2>
          <div className="flex flex-col md:flex-row md:space-x-6 mt-4">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2 font-medium text-gray-700">
                <FaPhoneAlt className="text-gray-500" />
                <span>{contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2 font-medium text-gray-700">
                <FaEnvelope className="text-blue-500" />
                <span>{contact.email}</span>
              </div>
              <div className="flex items-center space-x-2 font-medium text-gray-700">
                <FaMapMarkerAlt className="text-gray-500" />
                <span>{contact.address}</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex-grow">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="w-full text-left py-2 px-4 bg-gray-100 text-gray-800 font-semibold rounded-lg focus:outline-none">
                      {open ? 'Hide Notes' : 'View Notes'}
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-4">
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {contact.notes.map((note, idx) => (
                          <li key={idx}>{note}</li>
                        ))}
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>

          {/* Sales Action Buttons with Icons */}
          <div className="flex space-x-4 mt-6">
            <button className="px-6 py-2 text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 focus:outline-none flex items-center space-x-2">
              <FaCalendarAlt />
              <span>Schedule Meeting</span>
            </button>
            <button className="px-6 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none flex items-center space-x-2">
              <FaEnvelope />
              <span>Send Email</span>
            </button>
            <button className="px-6 py-2 text-white bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none flex items-center space-x-2">
              <FaFileAlt />
              <span>View Proposal</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactDetails;
