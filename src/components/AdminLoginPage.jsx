import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = ({ setIsAdmin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'HarshLokhande' && password === 'Harsh32Lok2**3') {
      setIsAdmin(true);
      navigate('/home');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div >
      <div className='bg-black'>
      <h1 className='responsive-heading'>Admin Login</h1>
      <section className='flex relative justify-center'>
      <div className='flex flex-wrap relative justify-center h-[25rem] bg-slate-400  w-[30rem] rounded-[50px] shadow-2xl'>     
       <form onSubmit={handleLogin}>
        <h1 className='timepass'>UserName</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
         <h1 className='timepass'>Password</h1>
        <input
          type="password"
          className='adminpassword'
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className='btn3 mt-5'>Login</button>
      </form>
      </div>
      </section>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    </div>
  );
};

export default AdminLoginPage;
