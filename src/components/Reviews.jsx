import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { ReviewContext } from "../contexts/ReviewContext";
import { getReviews } from "../utils/api";
import Nav from "./Nav";
import ReviewCard from "./ReviewCard";
import Header from "./Header";
import HeaderNav from "./HeaderNav";
import Pages from "./Pages";
import { Alert, AlertTitle } from "@mui/material";
import { Link } from "react-router-dom";



function Reviews() {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState()
    const { reviews, setReviews } = useContext(ReviewContext);
    const [searchParams] = useSearchParams();
    const sortByQuery = searchParams.get("sort_by");
    const orderQuery = searchParams.get("order");
    const categoryQuery = searchParams.get("category");
    const pageQuery = searchParams.get("p")
    const limitQuery = searchParams.get("limit")

    useEffect(() => {
        getReviews(sortByQuery, orderQuery, categoryQuery, pageQuery, limitQuery)
            .then((reviewsFromApi) => {
                setIsLoading(false);
                setReviews(reviewsFromApi);
            })
            .catch((err) => {
                setIsLoading(false);
                setIsError(true);
                setError(err)
            });
    }, [sortByQuery, orderQuery, categoryQuery, pageQuery, limitQuery, setReviews]);

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
        <section>
            <Header />
            <HeaderNav />
            <Pages reviews={reviews} />
            <Nav />
            <ReviewCard reviews={reviews} />
        </section>
    );
}

export default Reviews;
