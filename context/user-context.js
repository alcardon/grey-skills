import { Children, createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const useUserInfo = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    userName: "",
    email: "",
  });

  const createUser = (name, userName, email) => {
    setUserInfo({
      name: name,
      userName: userName,
      email: email,
    });
  };

  return (
    <UserContext.Provider value={{ userInfo, createUser }}>
      {children}
    </UserContext.Provider>
  );
};
