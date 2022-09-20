import React, { createContext, useContext, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import axios from "axios";
// import { AuthContext } from "./user";

let AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const RequireAuth = () => {

    const sendGetRequest = async () => {
        try {
            const resp = await axios.get(`/api/getUser`, {
                withCredentials: true,
            });
            console.log(resp.data);
            return resp.data;
        } catch (err) {
            // Handle Error Here
            console.error(err);
            return null;
        }
    };
    let AuthContext;


    if (sendGetRequest() && sendGetRequest().user === null) {
        AuthContext = createContext(null);
    } else {
        AuthContext = createContext({
            user: {
                email:
                    sendGetRequest() && sendGetRequest().user
                        ? sendGetRequest().user.email
                        : null,
                password:
                    sendGetRequest() && sendGetRequest().password
                        ? sendGetRequest().user.password
                        : null,
            },
        });
    }



    // let AuthContext = createContext(null);
    let useAuth = () => useContext(AuthContext);
    console.log(useAuth)
    let { user } = useAuth();
    const location = useLocation();

    console.log(user);
    if (!user) {
        return (
            <Navigate
                to={{ pathname: "/unauthorized", state: { from: location } }}
                replace
            />
        );
    }

    return <Outlet />;
};
