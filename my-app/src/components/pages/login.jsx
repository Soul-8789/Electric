import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform login authentication logic here based on userType, username, and password
    // Example: Validate credentials against a database or an API

    if (userType === 'admin') {
      console.log('Admin login',username,password);;
      // Redirect or perform actions specific to admin
    } else if (userType === 'customer') {
      console.log('Customer login',username,password);
      // Redirect or perform actions specific to customer
    }

    // Reset form fields after login attempt
    setUsername('');
    setPassword('');
    setUserType('');

  };

  return (
    <div className="login-container">

      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">


        <div className="form-group">
          <label htmlFor="user-type">User Type:</label>
          <select
            id="user-type"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="">Select User Type</option>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
          </select>
        </div>
        <div className="form-group">
        </div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Login</button>
        <p className="dont">Don't have an account? <Link to="/register" className='dummy'>Register</Link></p>
      </form>
    </div>
  );
};

export default Login;
