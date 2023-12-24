import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/__firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) => {
        console.log(email,password)
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const LogIN = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser => {
            setUser(currentUser);
            setLoading(false)
        }))
        return () => {
            return unsubscribe();
        }
       },[])

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