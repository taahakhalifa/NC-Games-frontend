import { createContext, useState } from "react";

import React from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [prevPath, setPrevPath] = useState("/");
    const handlePrevPath = (path) => {
        setPrevPath(path);
    };

    return (
        <UserContext.Provider
            value={{
                users,
                setUsers,
                loggedInUser,
                setLoggedInUser,
                isLoading,
                setIsLoading,
                isError,
                setIsError,
                isLoggedIn,
                setIsLoggedIn,
                prevPath,
                setPrevPath,
                handlePrevPath,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
