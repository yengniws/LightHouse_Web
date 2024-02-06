import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ExtraLogin: React.FC = () => {
    const [school, setSchool] = useState('');
    const [role, setRole] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();

    const postExtra = async () => {
        const token = localStorage.getItem('token');
        axios.post('http://localhost:8080/users/add/info', { school, role, age }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(() => {
                alert('저장되었습니다.');
                navigate('/');
            })
            .catch(error => {
                console.error('Something went wrong', error);
            });
    }

    return (
        <div>
            학교:
            <input type='text' value={school} onChange={e => setSchool(e.target.value)} />
            직업:
            <input type='text' value={role} onChange={e => setRole(e.target.value)} />
            나이:
            <input type='number' value={age} onChange={e => setAge(e.target.value)} />

            <button onClick={postExtra}>데이터 전송</button>
        </div>
    );
};

export default ExtraLogin;
