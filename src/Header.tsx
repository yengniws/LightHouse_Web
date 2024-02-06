import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from './login/firebase-config';
import './Header.css';
import lighthouse2 from './lighthouse2.png';

const Header: FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setIsLoggedIn(!!user);
            if (user) {
                // If the user is logged in, get the ID token.
                user.getIdToken().then((token) => {
                    // Store the ID token in local storage.
                    localStorage.setItem('token', token);
                    setIsLoggedIn(true);
                });
                
            } else {
                // If the user is logged out, remove the token.
                localStorage.removeItem('token');
                setIsLoggedIn(false);
                navigate('/Login');
            }
        });
    }, [auth, navigate]);
    
    const handleLogout = async () => {
        await signOut(auth);
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/');
    };

    const handleProtectedLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, path: string) => {
        if (!isLoggedIn) {
            event.preventDefault();
            window.alert('로그인 해주세요');
        }
    };

    return (
        <header>
            <div className="header">
                <div className="title">
                    <Link to='/' className='title_name'>
                        <div>
                            <p className="logo_text">Light</p>
                            <p className="logo_text">House</p>
                        </div>
                        <img src={lighthouse2} className="logo" alt="logo" />
                    </Link>
                </div>
                <div className='title_nav'>
                    <Link to='/Board' onClick={(e) => handleProtectedLinkClick(e, '/Board')} className="nav">게시판</Link>
                    <Link to='/Grade1' onClick={(e) => handleProtectedLinkClick(e, '/Grade1')} className="nav">문제</Link>
                    <Link to='/Rank' onClick={(e) => handleProtectedLinkClick(e, '/Rank')} className="nav">랭킹</Link>
                    <Link to='/User' onClick={(e) => handleProtectedLinkClick(e, '/User')} className="nav">내 페이지</Link>
                </div>
                <div className="title_login">
                    <Link to="/Login" onClick={isLoggedIn ? handleLogout : undefined}>
                        {isLoggedIn ? '로그아웃' : '로그인'}
                    </Link>
                </div>
            </div>

            <hr />
        </header>
    )
}

export default Header;