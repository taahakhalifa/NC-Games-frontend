import React from "react";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { ReviewContext } from "../contexts/ReviewContext";
import { getComments } from "../utils/api";

function Comments({ review }) {
    let date = review.created_at
        ? review.created_at.slice(0, 10).replace(/-/g, " ").split(" ")
        : "";
    let realDate = `${date[2]}/${date[1]}/${date[0]}`;

    const { isLoading, setIsLoading, isError, setIsError } =
        useContext(ReviewContext);
    const [comments, setComments] = useState([]);
    const review_id = review.review_id;

    useEffect(() => {
        console.log(
            `Making request to: https://taahakhalifa-nc-games-api.onrender.com/api/reviews/${review_id}/comments`
        );
        getComments(review_id)
            .then((commentsFromApi) => {
                setIsLoading(false);
                setComments(commentsFromApi);
            })
            .catch((err) => {
                setIsLoading(true);
                setIsError(true);
            });
    }, [review_id]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error</p>;
    }

    return (
        <div>
            <section className="comment-wrapper">
                <section className="comment-container white-background">
                    <h2 className="comment-section-header">Comments</h2>
                    <ul className="card-list">
                        {comments.map((comment) => {
                            console.log(comment);
                            return (
                                <li
                                    className="comment-list"
                                    key={comment.comment_id}
                                >
                                    <div className="comment-section">
                                        <div className="comment">
                                            <div className="vote-container">
                                                <div className="vote-button up-vote">
                                                    Up
                                                </div>
                                                <p className="voting-text">
                                                    16
                                                </p>
                                                <div className="vote-button down-vote">
                                                    Down
                                                </div>
                                            </div>
                                            <div className="comment-body">
                                                <p className="comment-author">
                                                    @{comment.author}
                                                </p>
                                                <p className="comment-text">
                                                    "{comment.body}"
                                                </p>
                                                <p className="comment-date">
                                                    Commented on: {realDate}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            </section>
        </div>
    );
}

export default Comments;

