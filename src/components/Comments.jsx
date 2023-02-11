import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { ReviewContext } from "../contexts/ReviewContext";
import { UserContext } from "../contexts/UserContext";
import { deleteComment, getCommentsById } from "../utils/api";
import CommentVotes from "./CommentVotes";

function Comments({ review }) {
    const review_id = review.review_id;
    const { comments, setComments } = useContext(ReviewContext);
    const { loggedInUser } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        getCommentsById(review_id)
            .then((commentsFromApi) => {
                setIsLoading(false);
                setComments(commentsFromApi);
            })
            .catch((err) => {
                setIsLoading(true);
                setIsError(true);
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
        return <p>Error</p>;
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
                                                    {loggedInUser.username ===
                                                    comment.author ? (
                                                        <div className="delete-button">
                                                            <button
                                                                variant="light"
                                                                className="delete-button"
                                                                onClick={() =>
                                                                    handleDelete(
                                                                        comment.comment_id
                                                                    )
                                                                }
                                                            >
                                                                {" "}
                                                                DELETE
                                                            </button>
                                                        </div>
                                                    ) : null}
                                                </div>
                                                <p className="comment-text">
                                                    "{comment.body}"
                                                </p>
                                                <CommentVotes
                                                    comment={comment}
                                                />
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
