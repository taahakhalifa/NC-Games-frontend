import { createContext, useState } from "react";

import React from "react";

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
    const [reviews, setReviews] = useState([]);

    return (
        <ReviewContext.Provider
            value={{
                reviews,
                setReviews,
            }}
        >
            {children}
        </ReviewContext.Provider>
    );
};
