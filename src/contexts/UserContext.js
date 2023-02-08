import { createContext, useState } from "react";

import React from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

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
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
