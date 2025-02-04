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
import CourseDetails from "./pages/CourseDetails";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import ServiceDetails from "./pages/ServiceDetails";
import ContactUsPage from "./pages/ContactUsPage";
import ScrollToTopButton from "./components/ScroolTop";
import SalesForceEvaluation from "./service-section/dedicated-pages/SalesForceEvolution";
import CandidateAssessment from "./service-section/dedicated-pages/CandidateAssessment";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import SampleRequestPage from "./pages/SampleRequestPage";
import LoginSignUp from "./auth/LoginSignUp";
import { ToastContainer, toast } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";
import ChangePassword from "./auth/ChangePwd";
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
          className={`transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"
            }`}
        >
           <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/service/:id" element={<ServiceDetails />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/pwd" element={<ChangePassword />} />
            <Route
              path="/course-details/:courseId"
              element={<CourseDetails />}
            />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/blog-details/:blogId" element={<BlogDetails />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/services/sales-candidate-assessments/sample-sales-candidate-assessments" element={<SampleRequestPage />} />
            <Route
              path="/services/sales-force-evaluation"
              element={<SalesForceEvaluation />}
            />
            <Route
              path="/services/sales-candidate-assessments"
              element={<CandidateAssessment />}
            />
            <Route
              path="/privacy-policy"
              element={<PrivacyPolicy />}
            />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/login-signup" element={<LoginSignUp />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <ScrollToTopButton />
          <Footer />
    <ToastContainer />
    </AuthProvider>
          {/* {isPopupOpen && <ScreenResolutionPopup />} */}
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
