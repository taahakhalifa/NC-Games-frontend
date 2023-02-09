import { createContext, useState } from "react";

import React from "react";

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    return (
        <ReviewContext.Provider
            value={{
                reviews,
                setReviews,
                isLoading,
                setIsLoading,
                isError,
                setIsError,
            }}
        >
            {children}
        </ReviewContext.Provider>
    );
};
