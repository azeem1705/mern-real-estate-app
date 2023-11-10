import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(
        "/api/v1/auth/signup",
        {
          username,
          email,
          password,
        }
      );
      console.log(response.data.message);
      toast.success("Signup successful!");
      navigate("/signin")
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = () => {
    let isValid = true;
    if (!username || username.trim().length < 3) {
      toast.error("Username must be at least 3 characters long");
      isValid = false;
    }
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      isValid = false;
    }
    if (!password || password.trim().length < 6) {
      toast.error("Password must be at least 6 characters long");
      isValid = false;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      isValid = false;
    }
    return isValid;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Sign Up'}
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign Up with Google
              </button>
            </div>
            <div className="mt-4 text-gray-700 text-center">
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-500 hover:text-blue-700">
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
