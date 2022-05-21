import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "@firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
    });

    return () => unsuscribe();
  }, []);

  const register = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const userSignOut = () => signOut(auth);

  return (
    <UserContext.Provider
      value={{ user, setUser, register, login, userSignOut }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
