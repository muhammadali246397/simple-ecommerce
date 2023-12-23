import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/__firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const LogIN = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const userInformation = {
        createUser,
        LogIN,
    }
    return (
       <AuthContext.Provider value = {userInformation}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;