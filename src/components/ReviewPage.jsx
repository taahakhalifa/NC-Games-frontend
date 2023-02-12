import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Post from "./Post";
import { getReviewById } from "../utils/api";
import Header from "./Header";
import HeaderNav from "./HeaderNav";
import { Alert } from "@mui/material";
import { AlertTitle } from "@mui/material";


function ReviewPage() {
    const { review_id } = useParams();
    const [review, setReview] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        getReviewById(review_id)
            .then((reviewFromApi) => {
                setIsLoading(false);
                setReview(reviewFromApi);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
                setIsError(true);
                setError(err.response)
            });
    }, [review_id, setIsError, setIsLoading]);

    if (isLoading) {
        return <p>Loading...</p>;
    }
    
    if (isError) {
        return (
            <Alert severity="error">
                {" "}
                <AlertTitle>
                    <strong>{error.status}</strong>
                </AlertTitle>
                <p className="error-message">{error.data.msg}</p>
                <Link to="/">
                    <button
                        className="back-button-error"
                        onClick={() => {
                            setIsError(false);
                        }}
                    >
                        Go Back
                    </button>
                </Link>
            </Alert>
        );
    }

    return (
        <div>
            <Header />
            <HeaderNav />
            <Post review={review} />
        </div>
    );
}

export default ReviewPage;
