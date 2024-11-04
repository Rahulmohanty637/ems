import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { employee, admin } = getLocalStorage();
    setUserData({ employee, data });
  }, []);
  
  return (
    <div>
      <AuthContext.Provider value={"sarthak"}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
