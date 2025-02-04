import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PersonalInformation = () => {
    const [formData, setFormData] = useState({
        username: "sonuhrushikeshshk.9999@gmail.com",
        surname: "Hrushikesh",
        firstName: "Hrushikesh",
        email: "sonuhrushikeshshk.9999@gmail.com",
        dateOfBirth: "2001/01/01",
        areasOfInterest: [],
        nextOfKin: { fullName: "", relationship: "" },
    });

    const [errors, setErrors] = useState({});
    const [currentStep, setCurrentStep] = useState(1);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
    };

    const handleAreaChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevData) => {
            const areasOfInterest = checked
                ? [...prevData.areasOfInterest, value]
                : prevData.areasOfInterest.filter((item) => item !== value);
            return { ...prevData, areasOfInterest };
        });
    };

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const validateForm = () => {
        let tempErrors = {};
        if (currentStep === 1) {
            if (!formData.username) tempErrors.username = "Username is required";
            if (!formData.surname) tempErrors.surname = "Surname is required";
            if (!formData.firstName) tempErrors.firstName = "First name is required";
            if (!formData.email) tempErrors.email = "Email address is required";
            else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email address is invalid";
        } else if (currentStep === 2) {
            if (formData.areasOfInterest.length === 0) {
                tempErrors.areasOfInterest = "Please select at least one area of interest";
            }
        } else if (currentStep === 3) {
            if (!formData.nextOfKin.fullName) tempErrors.nextOfKinFullName = "Next of kin full name is required";
            if (!formData.nextOfKin.relationship) tempErrors.nextOfKinRelationship = "Next of kin relationship is required";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            toast.error("Please correct the errors in the form.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
            return;
        }

        // Submit form logic here (example API call)
        try {
            toast.success("Personal Information Updated Successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        } catch (error) {
            console.error("Error updating personal information:", error);
            toast.error("An error occurred while updating personal information.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        }
    };

    const progressBarPercentage = (currentStep / 3) * 100;

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-center">Personal Information</h2>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 h-2 mb-4 rounded-full">
                <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${progressBarPercentage}%` }}
                ></div>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                    <>
                        <div>
                            <label className="block font-normal text-sm mb-1">Username</label>
                            <input
                                type="email"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2"
                                placeholder="Username"
                            />
                            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
                        </div>
                        <div>
                            <label className="block font-normal text-sm mb-1">Surname</label>
                            <input
                                type="text"
                                name="surname"
                                value={formData.surname}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2"
                                placeholder="Surname"
                            />
                            {errors.surname && <p className="text-red-500 text-xs mt-1">{errors.surname}</p>}
                        </div>
                        <div>
                            <label className="block font-normal text-sm mb-1">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2"
                                placeholder="First Name"
                            />
                            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                        </div>
                        <div>
                            <label className="block font-normal text-sm mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2"
                                placeholder="Email Address"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <label className="block font-normal text-sm mb-1">Date of Birth</label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>
                    </>
                )}

                {/* Step 2: Areas of Interest */}
                {currentStep === 2 && (
                    <>
                        <div>
                            <label className="block font-normal text-sm mb-1">Areas of Interest</label>
                            <div className="flex flex-wrap">
                                {["Strategy", "General", "Executive Development", "Management & Leadership Excellence", "Coaching", "Digitisation & Innovation"].map((area) => (
                                    <label key={area} className="mr-4">
                                        <input
                                            type="checkbox"
                                            value={area}
                                            checked={formData.areasOfInterest.includes(area)}
                                            onChange={handleAreaChange}
                                            className="mr-2"
                                        />
                                        {area}
                                    </label>
                                ))}
                            </div>
                            {errors.areasOfInterest && <p className="text-red-500 text-xs mt-1">{errors.areasOfInterest}</p>}
                        </div>
                    </>
                )}

                {/* Step 3: Next of Kin */}
                {currentStep === 3 && (
                    <>
                        <div>
                            <label className="block font-normal text-sm mb-1">Next of Kin Full Name</label>
                            <input
                                type="text"
                                name="nextOfKinFullName"
                                value={formData.nextOfKin.fullName}
                                onChange={(e) => setFormData({ ...formData, nextOfKin: { ...formData.nextOfKin, fullName: e.target.value } })}
                                className="w-full border border-gray-300 p-2"
                            />
                            {errors.nextOfKinFullName && <p className="text-red-500 text-xs mt-1">{errors.nextOfKinFullName}</p>}
                        </div>
                        <div>
                            <label className="block font-normal text-sm mb-1">Next of Kin Relationship</label>
                            <input
                                type="text"
                                name="nextOfKinRelationship"
                                value={formData.nextOfKin.relationship}
                                onChange={(e) => setFormData({ ...formData, nextOfKin: { ...formData.nextOfKin, relationship: e.target.value } })}
                                className="w-full border border-gray-300 p-2"
                            />
                            {errors.nextOfKinRelationship && <p className="text-red-500 text-xs mt-1">{errors.nextOfKinRelationship}</p>}
                        </div>
                    </>
                )}

                <div className="flex justify-between">
                    {currentStep > 1 && (
                        <button
                            type="button"
                            onClick={handleBack}
                            className="bg-gray-300 text-white py-2 px-4 rounded-md"
                        >
                            Back
                        </button>
                    )}
                    {currentStep < 3 ? (
                        <button
                            type="button"
                            onClick={handleNext}
                            className="bg-blue-500 text-white py-2 px-4 rounded-md"
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="bg-green-500 text-white py-2 px-4 rounded-md"
                        >
                            Submit
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default PersonalInformation;
