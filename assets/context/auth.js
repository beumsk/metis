// import React, { createContext, useContext, useState } from "react";
// import { useLocation, Navigate, Outlet } from "react-router-dom";

// import { AuthContext } from "./user";

// // const AuthContext = createContext(null);

// let useAuth = () => useContext(AuthContext);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// const RequireAuth = () => {
//   let useAuth = () => useContext(AuthContext);
//   let { user } = useAuth();
//   const location = useLocation();

//   if (!user) {
//     return (
//       <Navigate
//         to={{ pathname: "/unauthorized", state: { from: location } }}
//         replace
//       />
//     );
//   }

//   return <Outlet />;
// };
