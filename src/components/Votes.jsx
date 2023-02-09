import React, { useState } from "react";
import { patchReviewById } from "../utils/api";

function Votes({ review }) {
    const [voteChange, setVoteChange] = useState(0);

    const increaseVote = (increase) => {
        setVoteChange((currChange) => {
            return currChange + increase;
        });
        patchReviewById(review.review_id, increase);
    };

    const decreaseVote = (decrease) => {
        setVoteChange((currChange) => {
            return currChange + decrease;
        });
        patchReviewById(review.review_id, decrease);
    };
    // console.log(isNaN(review.votes));
    // const votes = isNaN(review.votes) ? 0 : review.votes;
    const votes = review.votes
    const votingText = votes + voteChange;

    return (
        <div>
            <div className="vote-container">
                <button className="vote-button up-vote" 
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
        </div>
    );
}

export default Votes;
