import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup() {
    
    const [name,setName] =useState()
    const [email,setEmail] =useState()
    const [password,setPassword] =useState()
    const navigate =useNavigate()
    
    const handleSubmit =(e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name,email,password})
        .then(result=> {console.log(result)
         navigate('/')
        })
        .catch(err=> console.log(err))
    }

    return (
        <div className="flex justify-center items-center bg-black min-h-screen">
        <div className="bg-gray-900 p-10 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-5xl font-extrabold text-center text-red-600 mb-8">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-red-500 font-semibold">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                autoComplete="off"
                name="name"
                className="w-full px-4 py-2 text-white bg-black rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-red-500 font-semibold">
                Email
              </label>
              <input
                type="email"
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
                placeholder="Enter Password"
                autoComplete="off"
                name="password"
                className="w-full px-4 py-2 text-white bg-black rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 font-bold text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Register
            </button>
          </form>
          <p className="text-center text-red-500 mt-6">Already have an Account?</p>
          <Link
            to="/"
            className="block w-full py-3 mt-2 font-bold text-center text-white bg-red-500 rounded hover:bg-red-600"
          >
            Login
          </Link>
        </div>
      </div>
      
      
      
    );
}

export default Signup;