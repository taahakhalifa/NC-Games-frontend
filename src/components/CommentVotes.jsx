import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { patchCommentById } from "../utils/api";

function CommentVotes({ comment }) {
    const [voteChange, setVoteChange] = useState(0);
    const {isLoggedIn} = useContext(UserContext)
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [hasVoted, setHasVoted] = useState(false);
    const originalVotes = comment.votes;
    const [newVotes, setNewVotes] = useState(originalVotes);

    const increaseVote = () => {
        if (voteChange === 0) {
            patchCommentById(comment.comment_id, 1);
            setNewVotes(newVotes + 1);
            setIsLiked(true);
            setHasVoted(true);
            setVoteChange(1);
        } else if (voteChange === -1) {
            patchCommentById(comment.comment_id, 2);
            setNewVotes(newVotes + 2);
            setIsLiked(true);
            setHasVoted(true);
            setVoteChange(1);
        }
    };

    const decreaseVote = () => {
        if (voteChange === 0) {
            patchCommentById(comment.comment_id, -1);
            setNewVotes(newVotes - 1);
            setIsDisliked(true);
            setHasVoted(true);
            setVoteChange(-1);
        } else if (voteChange === 1) {
            patchCommentById(comment.comment_id, -2);
            setNewVotes(newVotes - 2);
            setIsDisliked(true);
            setHasVoted(true);
            setVoteChange(-1);
        }
    };

    const showError = () => {
        alert("You must be signed in to vote!");
      };

    const votes = comment.votes;
    const votingText = votes + voteChange;

    let date = comment.created_at.slice(0, 10).replace(/-/g, " ").split(" ");
    let time = comment.created_at.slice(11, 19);

    let realDate = `${date[2]}/${date[1]}/${date[0]} ${time}`;

    return (
        <div>
            {isLoggedIn ? (
            <div className="vote-container-comment">
                <button
                    className="vote-button down-vote-comment"
                    onClick={() => decreaseVote(-1)}
                    disabled={voteChange === -1}
                >
                    Down
                </button>
                <p className="voting-text-comment">{votingText}</p>
                <button
                    className="vote-button up-vote-comment"
                    onClick={() => increaseVote(1)}
                    disabled={voteChange === 1}
                >
                    Up
                </button>
                <p className="comment-date">{realDate}</p>
            </div>
            ) : 
            (
                <div className="vote-container-comment">
                <button
                    className="vote-button down-vote-comment"
                    onClick={() => showError()}
                >
                    Down
                </button>
                <p className="voting-text-comment">{votingText}</p>
                <button
                    className="vote-button up-vote-comment"
                    onClick={() => showError()}
                >
                    Up
                </button>
                <p className="comment-date">{realDate}</p>
            </div>
            )}
        </div>
    );
}

export default CommentVotes;
