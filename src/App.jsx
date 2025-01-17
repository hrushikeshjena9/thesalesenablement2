

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScreenResolutionPopup from "./components/ScreenResolutionPopup";
import { useState, useEffect } from "react";
import { Bars } from "react-loader-spinner";
import NotFound from "./components/Not-found";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Course from "./pages/Course";
import About from "./pages/About";
import ServicePage from "./pages/ServicesPage";
// import Contact from "./pages/ContactUs";
import CourseDetails from "./pages/CourseDetails";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import ServiceDetails from "./pages/ServiceDetails";
import SalesForceEvaluation from "./service-section/SalesForceEvolution";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <div
          style={{
            background: "linear-gradient(to right, #DB0032, #FA6602)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div className="flex flex-wrap">
            <Bars
              height="80"
              width="80"
              color="#FFFFFF"
              ariaLabel="bars-loading"
              visible={true}
            />
          </div>
        </div>
      ) : (
        <div
          className={`transition-opacity duration-1000 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/service/:id" element={<ServiceDetails />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/course-details/:courseId" element={<CourseDetails />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/blog-details/:blogId" element={<CourseDetails />} />
       

            {/* <Route path="/contact-us" element={<Contact />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          {isPopupOpen && <ScreenResolutionPopup />}
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
