import { createUserWithEmailAndPassword } from "@firebase/auth";
import { signInWithEmailAndPassword } from "@firebase/auth"
import React, { createContext, useState } from "react";
import { auth } from "../Firebase";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const register = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  return (
    <UserContext.Provider value={{ user, setUser, register, login }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
