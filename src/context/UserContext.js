import { createContext, useEffect, useState } from "react";
import { getUserInfo } from "../services/UserService";
import { getAccessToken } from "../stores/AccessTokenStore";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const doLogin = (u) => {
    // return getUserInfo().then((response) => {setUser(response); return response});
    setUser({ u });
  };

  // useEffect(() => {
  //   if (getAccessToken()) {
  //     doLogin();
  //   }
  // }, []);

  const value = {
    doLogin,
    user
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
