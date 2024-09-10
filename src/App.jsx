import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddContentPage from './components/AddContentPage'
import AdminLoginPage from './components/AdminLoginPage';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import UsersReview from './components/UsersReview';
import Aboutus from './components/Aboutus';

const App = () => {
  const [pages, setPages] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false); // Admin login status

  useEffect(() => {
    const storedPages = JSON.parse(localStorage.getItem('pages'));
    if (storedPages) {
      setPages(storedPages);
    }
  }, []);

  const addPage = (title, user, content) => {
    const newPage = { title, user, content };
    const updatedPages = [...pages, newPage];
    setPages(updatedPages);
    localStorage.setItem('pages', JSON.stringify(updatedPages));
  };

  const deletePage = (index) => {
    const updatedPages = pages.filter((_, i) => i !== index);
    setPages(updatedPages);
    localStorage.setItem('pages', JSON.stringify(updatedPages));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage pages={pages} isAdmin={isAdmin} deletePage={deletePage} />} />
        <Route path="/add" element={<AddContentPage addPage={addPage} />} />
        <Route path="/admin" element={<AdminLoginPage setIsAdmin={setIsAdmin} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/userreview" element={<UsersReview/>} />
        <Route path="/onAboutUsClick" element={<Aboutus/>} />
      </Routes>
    </Router>
  );
};

export default App;
