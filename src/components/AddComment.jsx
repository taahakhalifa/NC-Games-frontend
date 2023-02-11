import React, { useContext, useState } from "react";
import { ReviewContext } from "../contexts/ReviewContext";
import { postComment } from "../utils/api";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function AddComment() {
    const { review_id } = useParams();
    const { setComments } = useContext(ReviewContext);
    const { loggedInUser } = useContext(UserContext);
    const [newComment, setNewComment] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        postComment(newComment, review_id, loggedInUser.username)
            .then((commentFromApi) => {
                console.log(commentFromApi);
                setComments((currComments) => [commentFromApi, ...currComments]);
            })
            .catch((error) => {
                console.error(error);
                setError("An error occurred while posting your comment. Please try again later.");
            });
    };

    return (
        <section className="add-comment-wrapper">
            <section className="add-comment-container white-background">
                {error && (
                    <div className="error-message">{error}</div>
                )}
                <h2 className="what-are-your-thoughts">What are your thoughts?</h2>
                <form className="add-comment-adder" onSubmit={handleSubmit}>
                    <label htmlFor="newComment">Add a Comment</label>
                    <textarea
                        id="newComment"
                        placeholder="Write your comment"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    ></textarea>
                    <button className="add-comment-button">Post</button>
                </form>
            </section>
        </section>
    );
}

export default AddComment;