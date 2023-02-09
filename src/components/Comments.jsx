import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsById } from "../utils/api";

function Comments({ review }) {
    const { review_id } = useParams()
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    let date = review.created_at.slice(0, 10).replace(/-/g, " ").split(" ")
    let realDate = `${date[2]}/${date[1]}/${date[0]}`;

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
    }, [review_id, setIsError, setIsLoading]);

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
                            return (
                                <li
                                    className="comment-list"
                                    key={comment.comment_id}
                                >
                                    <div className="comment-section">
                                        <div className="comment">
                                            <div className="vote-container">
                                                <button className="vote-button up-vote">
                                                    Up
                                                </button>
                                                <p className="voting-text">
                                                    16
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

