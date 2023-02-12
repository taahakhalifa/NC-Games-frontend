import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { patchReviewById } from "../utils/api";

function Votes({ review }) {
    const [voteChange, setVoteChange] = useState(0);
    const { isLoggedIn } = useContext(UserContext);
    const originalVotes = review.votes;
    const [newVotes, setNewVotes] = useState(originalVotes);

    const increaseVote = () => {
        if (voteChange === 0) {
            patchReviewById(review.review_id, 1);
            setNewVotes(newVotes + 1);
            setVoteChange(1);
        } else if (voteChange === -1) {
            patchReviewById(review.review_id, 2);
            setNewVotes(newVotes + 2);
            setVoteChange(1);
        }
    };

    const decreaseVote = () => {
        if (voteChange === 0) {
            patchReviewById(review.review_id, -1);
            setNewVotes(newVotes - 1);
            setVoteChange(-1);
        } else if (voteChange === 1) {
            patchReviewById(review.review_id, -2);
            setNewVotes(newVotes - 2);
            setVoteChange(-1);
        }
    };

    const showError = () => {
        alert("You must be signed in to vote!");
    };

    const votes = review.votes;
    const votingText = votes + voteChange;

    return (
        <div>
            {isLoggedIn ? (
                <div className="vote-container">
                    <button
                        className="vote-button up-vote"
                        onClick={() => increaseVote(1)}
                        disabled={voteChange === 1}
                    >
                        Up
                    </button>
                    <p className="voting-text">{votingText}</p>
                    <button
                        className="vote-button down-vote"
                        onClick={() => decreaseVote(-1)}
                        disabled={voteChange === -1}
                    >
                        Down
                    </button>
                </div>
            ) : (
                <div className="vote-container">
                    <button className="vote-button up-vote" onClick={showError}>
                        Up
                    </button>
                    <p className="voting-text">{votingText}</p>
                    <button
                        className="vote-button down-vote"
                        onClick={showError}
                    >
                        Down
                    </button>
                </div>
            )}
        </div>
    );
}

export default Votes;
