import React, { useContext, useEffect, useState } from "react";
import { ReviewContext } from "../contexts/ReviewContext";
import { UserContext } from "../contexts/UserContext";
import { deleteComment, getCommentsById } from "../utils/api";
import CommentVotes from "./CommentVotes";
import { Alert, AlertTitle } from "@mui/material";
import { Link } from "react-router-dom";

function Comments({ review }) {
    const review_id = review.review_id;
    const { comments, setComments } = useContext(ReviewContext);
    const { loggedInUser, isLoggedIn } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState()

    useEffect(() => {
        getCommentsById(review_id)
            .then((commentsFromApi) => {
                setIsLoading(false);
                setComments(commentsFromApi);
            })
            .catch((err) => {
                setIsLoading(false);
                setIsError(true);
                setError(err)
            });
    }, [review_id]);

    function handleDelete(comment_id) {
        if (window.confirm("Are you sure you want to delete this comment?")) {
            deleteComment(comment_id).then(() => {
                setComments((currComments) => {
                    return currComments.filter((comment) => {
                        return comment.comment_id !== comment_id;
                    });
                });
            });
        }
    }

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
            <section className="comment-wrapper">
                <section className="comment-container white-background">
                    <h2 className="comment-section-header">Comments</h2>
                    <ul className="card-list">
                        {comments.map((comment, index) => {
                            return (
                                <li key={index} className="comment-list">
                                    <div className="comment-section">
                                        <div className="comment">
                                            <div className="comment-body">
                                                <div className="comment-header-and-delete">
                                                    <p className="comment-author">
                                                        @{comment.author}
                                                    </p>
                                                <p className="comment-text">
                                                    "{comment.body}"
                                                </p>
                                                </div>
                                                <CommentVotes
                                                    comment={comment}
                                                    />
                                                    {loggedInUser.username ===
                                                    comment.author && isLoggedIn ? (
                                                        <div className="delete-button-div">
                                                            <button
                                                                className="delete-button"
                                                                onClick={() =>
                                                                    handleDelete(
                                                                        comment.comment_id
                                                                    )
                                                                }
                                                            >
                                                                {" "}
                                                                Delete Comment
                                                            </button>
                                                        </div>
                                                    ) : null}
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
