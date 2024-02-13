import React, { useState } from 'react';
import axios from 'axios';

interface User {
  email: string;
  password: string;
  authority: 'ROLE_STUDENT' | 'ROLE_TEACHER';
  name?: string;
  age?: number;
  nation?: string;
  school?: string;
}

const ExtraLogin: React.FC = () => {
  const [user, setUser] = useState<User>({ email: '', password: '', authority: 'ROLE_STUDENT' });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUser({
      ...user,
      authority: event.target.value as 'ROLE_STUDENT' | 'ROLE_TEACHER',
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // First step of signup
      await axios.post('http://localhost:8080/auth/signup', {
        email: user.email,
        password: user.password,
        authority: user.authority,
        name: user.name,
        age: user.age,
        nation: user.nation,
        school: user.school,
      });

      alert('회원가입이 완료되었습니다. 로그인해주세요.');
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
      <select name="role" value={user.authority} onChange={handleRoleChange}>
        <option value="">Select role</option>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>
      <input
        type="text"
        name="name"
        value={user.name || ''}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        type="number"
        name="age"
        value={user.age || ''}
        onChange={handleInputChange}
        placeholder="Age"
      />
      <input
        type="text"
        name="nation"
        value={user.nation || ''}
        onChange={handleInputChange}
        placeholder="Nation"
      />
      <input
        type="text"
        name="school"
        value={user.school || ''}
        onChange={handleInputChange}
        placeholder="School"
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default ExtraLogin;
