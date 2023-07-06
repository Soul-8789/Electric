import React, { useState } from 'react';
import './register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform login authentication logic here based on userType, username, and password
    // Example: Validate credentials against a database or an API

    if (userType === 'admin') {
      console.log('Admin login');
      // Redirect or perform actions specific to admin
    } else if (userType === 'customer') {
      console.log('Customer login');
      // Redirect or perform actions specific to customer
    }

    // Reset form fields after login attempt
    setUsername('');
    setPassword('');
    setEmail('');
    setUserType('');
  };
  // const PostData = async(e) =>{
  //    e.preventDefault() ;

  // }

  return (
    <div className="register-container">
      <form method='POST'  className="register-form" onSubmit={handleLogin}>
        <h2>Register</h2>
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
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
        <button type="submit" onClick={handleLogin}>Register</button>
      </form>
    </div>
  );
};

export default Register;
