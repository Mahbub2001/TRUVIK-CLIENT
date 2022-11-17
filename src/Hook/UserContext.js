import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {

  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  const provider = new GoogleAuthProvider()

  const createUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth,provider)
  }

  const handleResetPassword = (email) =>{
    return sendPasswordResetEmail(auth, email);
  }

  const signIn = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }

  const updateUserProfile = (profile) =>{
      return updateProfile(auth.currentUser,profile);
  }

  const logOut = () =>{
    setLoading(true);
    localStorage.removeItem('visa-token');
    return signOut(auth);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      if (currentUser === null || currentUser.emailVerified || !currentUser.emailVerified) {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return ()=>{
      unsubscribe();
    }
  },[])


  const authInfo = {
    user,
    setUser,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    loading,
    setLoading,
    googleSignIn,
    handleResetPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
