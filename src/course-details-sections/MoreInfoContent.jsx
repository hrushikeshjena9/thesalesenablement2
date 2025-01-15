import React from 'react';
import { Disclosure } from '@headlessui/react';

const MoreInfoContent = () => {
  const infoSections = [
    {
      title: "Frequently Asked Questions",
      duration: "Ongoing",
      content: [
        "How do I enroll in this course?",
        "What materials are included?",
        "What is the duration of the course?",
        "Can I access course materials after the course ends?",
        "Are there any prerequisites for this course?",
      ],
    },
    {
      title: "Additional Course Details",
      duration: "N/A",
      content: [
        "This course is designed for beginners and professionals alike.",
        "Hands-on projects are included to enhance learning.",
        "You'll gain access to exclusive learning resources.",
        "The course covers topics in depth, ensuring a comprehensive understanding.",
        "Live sessions with instructors are scheduled regularly for real-time interaction.",
      ],
    },
    {
      title: "Instructor Information",
      duration: "Ongoing",
      content: [
        "John Doe, an experienced professional with over 10 years in the industry.",
        "He has worked with numerous Fortune 500 companies and is passionate about teaching.",
        "John holds a master's degree in Computer Science and has certifications in advanced programming.",
        "He enjoys mentoring students and helping them build practical skills for the real world.",
      ],
    },
    {
      title: "Course Benefits",
      duration: "N/A",
      content: [
        "Gain practical experience through real-world projects.",
        "Earn a certificate upon completion.",
        "Access to a community of learners and professionals.",
        "Lifetime access to course materials and updates.",
        "Opportunities to network with industry experts and peers.",
      ],
    },
  ];

  return (
    <div className="space-y-4">
      <h1 className="uppercase text-3xl font-bold text-center mb-6">More Information</h1>
      
      {/* Table Structure */}
      <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">Section</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">Duration</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">Details</th>
            </tr>
          </thead>
          <tbody>
            {infoSections.map((section, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-6 py-4 text-sm font-medium text-gray-700">
                  <Disclosure>
                    {({ open }) => (
                      <Disclosure.Button className="flex items-center space-x-2">
                        <span>{section.title}</span>
                      </Disclosure.Button>
                    )}
                  </Disclosure>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">{section.duration}</td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <Disclosure>
                    {({ open }) => (
                      <Disclosure.Panel>
                        {open && (
                          <ul className="list-disc pl-5 space-y-2">
                            {section.content.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </Disclosure.Panel>
                    )}
                  </Disclosure>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MoreInfoContent;
