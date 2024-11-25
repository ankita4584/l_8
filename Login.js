import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkLogin } from './api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const loginDetails = { email, password };
      const response = await checkLogin(loginDetails);

      if (response.status === 200) {
        const { role } = response.data;
        if (role === 'teacher') {
          navigate('/teacher');
        } else if (role === 'student') {
          navigate('/student');
        }
      }
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
