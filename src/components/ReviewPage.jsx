import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";
import { ReviewContext } from "../contexts/ReviewContext";
import { getReviewById } from "../utils/api";

function ReviewPage() {
    const { review_id } = useParams();
    const [review, setReview] = useState({});
    const { isLoading, setIsLoading, isError, setIsError } =
        useContext(ReviewContext);

    console.log(review_id, "<--- outside useEffect");

    useEffect(() => {
        getReviewById(review_id)
            .then((reviewFromApi) => {
                console.log(review_id, "<--- inside useEffect");
                setIsLoading(false);
                setReview(reviewFromApi);
            })
            .catch((err) => {
                setIsLoading(true);
                setIsError(true);
            });
            
    }, [review_id, setIsError, setIsLoading]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error</p>;
    }

    return (
        <div>
            <Post review={review} />
        </div>
    );
}

export default ReviewPage;
