import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Header from './Header.tsx';
import { BrowserRouter, Outlet } from 'react-router-dom';
import AuthProvider from './login/authProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthProvider>
      <Header />
      <App />
    </AuthProvider>
  </BrowserRouter>
)
