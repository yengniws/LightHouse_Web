import './Login.css'
import { auth } from "./firebase-config";
import { GoogleAuthProvider, signInWithPopup, getIdToken, User } from "firebase/auth";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import googleLogin from '../googleLogin.png'

const Login = () => {
    const [userData, setUserData] = useState<User | null>(null);
    const navigate = useNavigate();

    async function handleGoogleLogin() {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            setUserData(user);

            const token = await getIdToken(auth.currentUser as any);

            // HTTP 요청 보내기
            const apiUrl = "";//URL 입력하기
            axios.get(apiUrl, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    // 성공 시 처리
                    console.log(response.data);
                    // navigate('/ExtraLogin')
                    navigate('/')
                })
                .catch(error => {
                    // 에러 처리
                    console.error(error);
                });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='loginBox'>
            {/* <button className="loginBtn" onClick={handleGoogleLogin}>로그인</button> */}
            <button className='google-login-button' onClick={handleGoogleLogin}>
                <img src={googleLogin} alt="Google 로그인" />
                Sign in with Google
            </button>
        </div>
    )
}

export default Login;