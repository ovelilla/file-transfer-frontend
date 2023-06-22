import { useState, createContext, useEffect } from "react";
import axios from "@/config/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [auth, setAuth] = useState(null);

    const getAuth = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get("/users/auth", {
                withCredentials: true,
            });
            setAuth(data);
        } catch (error) {
            setAuth(null);
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            await axios.get("/users/logout", {
                withCredentials: true,
            });
            setAuth(null);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAuth();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                loading,
                setLoading,
                auth,
                setAuth,
                getAuth,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
