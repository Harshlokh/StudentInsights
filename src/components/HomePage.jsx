import React, { useState,useRef } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Contact from './Contact'
import BackgroundSlideshow from './BackgroundSlideshow';
import UsersReview from './UsersReview';
import Aboutus from './Aboutus';



const HomePage = ({ pages, isAdmin, deletePage }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPages = pages.filter(page =>
    page.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  const getStartedRef = useRef(null);
 
 
  
  return (
    <div className='bg-[#03040a] text-white' id="Start">
      <Nav  />
      <BackgroundSlideshow getStartedRef={getStartedRef}/>
        <Aboutus />
      <div className='mt-[10rem]'>
      <div className='mt-[10rem]' ref={getStartedRef}>

      <h1 className='responsive-heading'>Get Started</h1>
      <div className='flex flex-wrap relative justify-center gap-11'>
      <Link to="/add">
        <button  className='btn5'>Add opinion</button>
      </Link>
      
      {!isAdmin && (
        <Link to="/admin">
          <button className='btn5'>Admin Login</button>
        </Link>
      )}
      </div>
      <div className='mt-20'>
        <h1 className='responsive-miniheading '>Search Name </h1>   
           <div className='flex relative flex-wrap justify-center'>
           <input
        className='bg-slate-800'
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
       </div>

      <div className="pages-list">
        {filteredPages.map((page, index) => (
          <div key={index} className="page-item">
            <h2 className='titleforcompany'>{page.title}</h2>
            <p className='usernamewhoaddscontent '>Added by: {page.user}</p>
            <div className="page-content">{page.content}</div>
            {isAdmin && (
              <button className='btn2' onClick={() => deletePage(index)}>Delete</button>
            )}
          </div>
        ))}
      </div>
      </div>
      </div>
      <div>
      
      </div>
      <UsersReview/>
      <Contact />
    </div>
    
  );
};

export default HomePage;
