import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddContentPage = ({ addPage }) => {
  const [title, setTitle] = useState('');
  const [user, setUser] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPage(title, user, content);
    navigate('/home');  // Redirect to the home page after adding content
  };

  return (
    <div className="bg-black py-10 flex justify-center items-center min-h-screen">
    <div className="w-full max-w-lg p-8 bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold text-center text-red-600 mb-8">Add your views</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div>
          <h3 className="text-2xl font-semibold text-red-500 mb-2">Enter College Name</h3>
          <input
            type="text"
            className="w-full px-4 py-2 text-white font-bold bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="College Name..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-red-500 mb-2">Enter Your Name</h3>
          <input
            type="text"
            className="w-full px-4 py-2 text-white font-bold bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Your Name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-red-500 mb-2">Your Views On College</h3>
          <textarea
            className="w-full h-32 px-4 py-2 text-white font-bold bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Your Views..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 font-bold text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Add Page
          </button>
        </div>
      </form>
    </div>
  </div>
  
  
  
  );
};

export default AddContentPage;
