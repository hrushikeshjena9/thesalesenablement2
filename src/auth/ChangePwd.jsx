import React, { useState } from "react";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ChangePassword = () => {
    const [passwordVisible, setPasswordVisible] = useState({
        current: false,
        new: false,
        confirm: false,
    });
    const [formData, setFormData] = useState({
        current_password: "",
        new_password: "",
        confirm_password: "",
    });
    const [errors, setErrors] = useState({});

    const togglePasswordVisibility = (type) => {
        setPasswordVisible(prevState => ({
            ...prevState,
            [type]: !prevState[type],
        }));
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.current_password) {
            tempErrors.current_password = "Current password is required";
        }
        if (!formData.new_password) {
            tempErrors.new_password = "New password is required";
        } else if (formData.new_password.length < 8 ||
                   !/[A-Z]/.test(formData.new_password) ||
                   !/[a-z]/.test(formData.new_password) ||
                   !/[0-9]/.test(formData.new_password) ||
                   !/[^a-zA-Z0-9]/.test(formData.new_password)) {
            tempErrors.new_password = "Password must be at least 8 characters with uppercase, lowercase, number, and special character.";
        }
        if (!formData.confirm_password) {
            tempErrors.confirm_password = "Confirm password is required";
        } else if (formData.new_password !== formData.confirm_password) {
            tempErrors.confirm_password = "Passwords do not match";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Submitting form with data:", formData);

        if (!validateForm()) {
            console.log("Validation failed:", errors);
            toast.error("Please correct the errors in the form.", { position: "top-right", autoClose: 3000 });
            return;
        }

        try {
            const token = localStorage.getItem("token");
            const user_id = localStorage.getItem("user_id"); // Fetch user_id from localStorage or session

            if (!user_id) {
                console.error("User ID not found in localStorage");
                toast.error("User ID is missing. Please log in again.", { position: "top-right", autoClose: 3000 });
                return;
            }

            const url = "http://192.168.1.7:8000/api/v1/change-password";
            console.log("API Request URL:", url);
            console.log("Authorization Token:", token);
            console.log("User ID:", user_id);

            const requestData = { ...formData, user_id }; // Include user_id in the request
            console.log("Request Data:", requestData);

            const { data: res } = await axios.post(url, requestData, {
                headers: { Authorization: `Bearer ${token}` },
            });

            console.log("API Response:", res);

            if (res.status) {
                toast.success(res.message, { position: "top-right", autoClose: 3000 });
                setFormData({ current_password: "", new_password: "", confirm_password: "" });
            } else {
                toast.error(res.message || "Failed to change password.", { position: "top-right", autoClose: 3000 });
            }
        } catch (error) {
            console.error("Error changing password:", error.response ? error.response.data : error.message);
            toast.error("An error occurred while changing the password.", { position: "top-right", autoClose: 3000 });
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-center">Change Password</h2>
            <p className="text-gray-600 mb-4 text-sm text-center">Choose a strong password and don't reuse it.</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
                {['current_password', 'new_password', 'confirm_password'].map((field, index) => (
                    <div className="relative" key={index}>
                        <label className="block font-normal text-sm mb-1">
                            {field.replace('_', ' ').replace(/\b\w/g, c => c.toUpperCase())}
                        </label>
                        <FaLock className="absolute left-3 top-10 text-gray-400" />
                        <input
                            type={passwordVisible[field] ? "text" : "password"}
                            name={field}
                            value={formData[field]}
                            placeholder={field.replace('_', ' ').replace(/\b\w/g, c => c.toUpperCase())}
                            onChange={handleChange}
                            className="w-full border border-gray-300 pl-10 pr-10 mt-1 p-2"
                        />
                        {field !== 'current_password' && (
                            <button
                                type="button"
                                className="absolute right-3 top-10 text-gray-400 focus:outline-none"
                                onClick={() => togglePasswordVisibility(field)}
                            >
                                {passwordVisible[field] ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        )}
                        {errors[field] && <p className="text-red-500 text-xs mt-1">{errors[field]}</p>}
                    </div>
                ))}
                <button
                    type="submit"
                    className="text-white w-full text-sm uppercase transition-transform duration-500 ease-out transform bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none px-5 py-2.5 flex items-center justify-center"
                >
                    Change Password
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ChangePassword;

