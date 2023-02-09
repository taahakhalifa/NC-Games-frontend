import { createContext, useState } from "react";

import React from "react";

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
    const [reviews, setReviews] = useState([]);
    const [comments, setComments] = useState([]);

    return (
        <ReviewContext.Provider
            value={{
                reviews,
                setReviews,
                comments,
                setComments,
            }}
        >
            {children}
        </ReviewContext.Provider>
    );
};
