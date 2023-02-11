import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { ReviewContext } from "../contexts/ReviewContext";
import { getCommentsById } from "../utils/api";

function Comments({ review }) {
    const review_id = review.review_id;
    const { comments, setComments } = useContext(ReviewContext);
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
    }, [review_id, comments]);

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
                            // let date = comment.created_at
                            // .slice(0, 10)
                            // .replace(/-/g, " ")
                            // .split(" ");
                            
                            // console.log(date);
                            // let realDate = `${date[2]}/${date[1]}/${date[0]}`;

                            return (
                                <li
                                    key={comment.comment_id}
                                    className="comment-list"
                                >
                                    <div className="comment-section">
                                        <div className="comment">
                                            <div className="vote-container">
                                                <button className="vote-button up-vote">
                                                    Up
                                                </button>
                                                <p className="voting-text">
                                                    {comment.votes}
                                                </p>
                                                <button className="vote-button down-vote">
                                                    Down
                                                </button>
                                            </div>
                                            <div className="comment-body">
                                                <p className="comment-author">
                                                    @{comment.author}
                                                </p>
                                                <p className="comment-text">
                                                    "{comment.body}"
                                                </p>
                                                <p className="comment-date">
                                                    {/* Commented on: {realDate} */}
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
