import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result);  // Check the result

                // Using a more flexible check to handle different capitalizations
                if (result.data.toLowerCase() === "success") {
                    console.log("Login successful, navigating to home...");
                    navigate('/home');
                } else {
                    console.log("Login failed or unexpected response:", result.data);
                }
            })
            .catch(err => {
                console.log("Error during login:", err);
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-lg shadow-lg">
          <h2 className="text-5xl font-bold text-center text-red-600">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-red-500 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                className="w-full px-4 py-2 text-white bg-black rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-red-500 font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                name="password"
                className="w-full px-4 py-2 text-white bg-black rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 font-bold text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Login
            </button>
          </form>
          <p className="text-center text-red-500">Don't have an Account?</p>
          <Link
            to="/register"
            className="block w-full py-2 font-bold text-center text-white bg-red-500 rounded hover:bg-red-600"
          >
            Register Now
          </Link>
        </div>
      </div>
      
    );
}

export default Login;
