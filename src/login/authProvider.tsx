import { User } from "firebase/auth";
import React, { useEffect, useState, ReactNode } from "react";
import { AuthContext } from "./authContext";
import { auth } from "./firebase-config";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged(fbUser => {
      console.log(`구독 실행`, fbUser);
      setUser(fbUser);
    });
    return subscribe;
  }, []);

  return <AuthContext.Provider value={ user }>{children}</AuthContext.Provider>;
};

export default AuthProvider;