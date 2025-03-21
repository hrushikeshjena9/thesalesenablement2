
import React, { useEffect, useState } from "react";
import CourseItem from "./CourseItem";
import axios from "../api/axios";

const CourseList = ({ filters,filterData }) => {
  if (!filterData) return <p></p>;
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.post("/courses");
        setCourses(res.data.data);
      } catch (error) {
        setError("Failed to fetch courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    if (!courses.length) return;
  const newFilteredCourses = courses.filter((course) => {
 const locationMatches =
        !filters.location ||
        filters.location === "viewAll" ||
        filters.location.toLowerCase() === course.location?.text?.toLowerCase();
  
      const audienceMatches =
        !filters.audience ||
        filters.audience === "viewAll" ||
        filters.audience.toLowerCase() === course.audience?.toLowerCase();
  
      const topicsMatches = Object.entries(filters.topics || {}).every(
        ([topic, isSelected]) => {
          if (!isSelected) return true;
          if (Array.isArray(course.topics)) {
            return course.topics.includes(topic);
          }
          if (typeof course.topics === "object") {
            return course.topics[topic] === true;
          }
          return false;
        }
      );
      return locationMatches && audienceMatches && topicsMatches;
    });
    setFilteredCourses(newFilteredCourses.length > 0 ? newFilteredCourses : courses);
  }, [filters, courses]);
  
  return (
    <section className="flex-1">
      {loading ? (
        <p>Loading courses...</p>
      ) : error ? (
        <p>{error}</p>
      ) : filteredCourses.length === 0 ? (
        <div>
          <h2 className="text-xl font-semibold mb-6">
            We're sorry, but it looks like there are currently no courses
            matching your selected criteria. Our team continuously updates our
            course offerings, so please consider adjusting your filters or check
            back later.
          </h2>
          <div>
            Couldn't find anything of interest for you? If you have a specific
            enquiry or need assistance, please don't hesitate to reach out to us
            directly. Our team is here to help. You can contact us at{" "}
            <a
              href="mailto:info@theenablement.com"
              className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] bg-clip-text text-transparent"
            >
              info@theenablement.com
            </a>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredCourses.map((course) => (
            <CourseItem key={course.id} course={course} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CourseList;
