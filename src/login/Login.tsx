import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface User {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [user, setUser] = useState<User>({ email: '', password: '' });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/auth/login', user);
      const token = response.data.token;

      // save the token into local storage
      localStorage.setItem('token', token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleInputChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
    <Link to="/ExtraLogin">회원가입 페이지로 이동</Link>
    </>
  );
};

export default Login;
