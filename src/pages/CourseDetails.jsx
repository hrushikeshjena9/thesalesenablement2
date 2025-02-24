import React, { useEffect, useState } from "react";
import CourseDetailSection from "../course-details-sections/CourseDetailSection";
import HeroCourseDetails from "../course-details-sections/HeroCourseDetails";
import { useParams } from "react-router-dom";
import axios from "../api/axios"

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`courses-details/${id}`);
        const data = res.data;

        const formattedCourse = {
          ...data,
          advantages: JSON.parse(data.advantages),
          attendees: JSON.parse(data.attendees),
          modules: JSON.parse(data.modules),
          instructor_details: JSON.parse(data.instructor_details),
        };

        setCourse(formattedCourse);
        console.log(formattedCourse);
      } catch (error) {
        console.error("Error fetching course:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  return (
    <div>
      <HeroCourseDetails />

      <div className="container mx-auto px-4 py-12 ">
        <CourseDetailSection course={course} />
      </div>
    </div>
  );
}

export default CourseDetails;
