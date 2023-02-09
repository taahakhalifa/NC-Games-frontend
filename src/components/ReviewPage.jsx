import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";
import { getReviewById } from "../utils/api";

function ReviewPage() {
    const { review_id } = useParams();
    const [review, setReview] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        getReviewById(review_id)
            .then((reviewFromApi) => {
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
