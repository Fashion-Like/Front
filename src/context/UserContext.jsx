import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const doLogin = (r) => {
    console.log(r)
    return setUser({ name: "Jose" });
  };

  const value = {
    doLogin,
    user
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
