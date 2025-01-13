// src/components/CourseItem.js
import React from 'react';

const CourseItem = ({ course }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-lg">
      <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-t-lg" />
      <h3 className="text-xl font-semibold mt-4">{course.title}</h3>
      <p className="mt-2">{course.description}</p>
      <a href="#" className="text-blue-500 mt-4 block">
        View Details & Book Now
      </a>
    </div>
  );
};

export default CourseItem;
