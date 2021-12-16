// import {createContext} from "react";
// const UserContext = createContext({})
// export default UserContext

import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const AppContextProvider = ({ children }) => {
  const userInitialState = {};

  const [user, setUser] = useState(userInitialState);

  const values = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  );
};

export default AppContextProvider;