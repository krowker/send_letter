import { createContext, useState } from "react";

export const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
   const [user, setUser] = useState({})

   const signin = (newUser, cb) => {
      setUser(newUser),
      cb()
   }

   const singout = (cb) => {
      cb()
   }

   const value = { user, signin, signout }

   return <AuthContext.Provider value={value}>
      {children}
   </AuthContext.Provider>
}