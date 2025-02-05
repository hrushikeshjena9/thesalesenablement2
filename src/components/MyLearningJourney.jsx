import React from 'react';
import { FaCheckCircle, FaBookOpen, FaClipboardList } from 'react-icons/fa';

const MyLearningJourney = () => {
  // Mock data for demonstration with only the courses you provided
  const courses = [
    { name: 'Professional Selling Skills', progress: 80 },
    { name: 'Communication Skills for Sales Staff', progress: 50 },
    { name: 'Front Line Retail Selling Skills', progress: 30 },
   
  ];

  const notifications = [
    "New module added in Professional Selling Skills course.",
    "You have a quiz due tomorrow on Communication Skills for Sales Staff.",
    "New resource available for Sales Management course.",
  ];

  const resources = [
    { title: "Sales Skills Guide", link: "https://www.salesforce.com/products/sales-cloud/overview/" },
    { title: "Retail Sales Strategy", link: "https://www.retaildoc.com/blog/sales-strategy" },
    { title: "Sales Management Tips", link: "https://www.saleshacker.com/sales-management/" },
  ];

  return (
    <div className="w-full py-8">
      {/* Learning Journey Container */}
      <div className="max-w-8xl mx-auto rounded-xl shadow-xl  bg-white">

        {/* Dashboard Overview */}
        <div className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Courses Completed</span>
                <span className="font-semibold text-lg">5/6</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Current Progress</span>
                <span className="font-semibold text-lg">60%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Upcoming Deadlines</span>
                <span className="font-semibold text-lg">1</span>
              </div>
            </div>
          </div>

          {/* Course Progress */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4">Courses/Modules</h2>
            {courses.map((course, index) => (
              <div key={index} className="flex justify-between mb-4">
                <span className="text-gray-600">{course.name}</span>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                    <div
                      className={`h-2 rounded-full ${course.progress >= 80 ? 'bg-green-500' : course.progress >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-600">{course.progress}%</span>
                </div>
              </div>
            ))}
          </div>

          {/* Notifications */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
            <ul className="space-y-2">
              {notifications.map((notification, index) => (
                <li key={index} className="text-gray-600 hover:text-[#DB0032] transition-colors duration-300">{notification}</li>
              ))}
            </ul>
          </div>

          {/* Learning Resources */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4">Learning Resources</h2>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline transition-all duration-300">
                    {resource.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="flex items-center justify-center mt-8 mb-8">
          <div className="w-24 h-1 rounded-full bg-[#DB0032]"></div>
        </div>

        <div className="grid grid-cols-2 gap-8 py-6 px-4">
          <div className="p-6 rounded-xl ">
            <h3 className="text-3xl font-semibold text-center mb-6 text-[#DB0032]">Upcoming Goals</h3>
            <ul className="list-disc pl-6 space-y-4 text-lg">
              <li className="transition-all hover:text-[#DB0032]">Complete the Professional Selling Skills course.</li>
              <li className="transition-all hover:text-[#DB0032]">Attend the next workshop on Communication Skills for Sales Staff.</li>
              <li className="transition-all hover:text-[#DB0032]">Finish building my personal portfolio.</li>
            </ul>
          </div>

          {/* Applications in Progress */}
          <div className="mt-8 space-y-6">

            {/* Current Courses */}
            <div className="p-6 rounded-xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-3xl font-semibold text-center mb-6 text-[#DB0032]">Current Courses/Programmes</h3>
              <ul className="list-disc pl-6 space-y-4 text-lg">
                <li className="transition-all hover:text-[#DB0032]">Professional Selling Skills</li>
                <li className="transition-all hover:text-[#DB0032]">Communication Skills for Sales Staff</li>
                <li className="transition-all hover:text-[#DB0032]">Front Line Retail Selling Skills</li>
                <li className="transition-all hover:text-[#DB0032]">Sales Management</li>
                <li className="transition-all hover:text-[#DB0032]">Sales Territory Planning & Routing</li>
                <li className="transition-all hover:text-[#DB0032]">Retail Sales Planning and Forecasting</li>
              </ul>
            </div>

            {/* Completed Courses */}
            <div className="p-6 rounded-xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-3xl font-semibold text-center mb-6 text-[#DB0032]">Completed Courses/Programmes</h3>
              <ul className="list-disc pl-6 space-y-4 text-lg">
                {/* This can be dynamically updated or empty */}
                <li className="transition-all hover:text-[#DB0032]">Frontend Web Development</li>
                <li className="transition-all hover:text-[#DB0032]">ReactJS Fundamentals</li>
                <li className="transition-all hover:text-[#DB0032]">Introduction to Databases and SQL</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MyLearningJourney;
