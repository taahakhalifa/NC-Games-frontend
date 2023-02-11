import React, { useState } from "react";
import { patchCommentById } from "../utils/api";

function CommentVotes({ comment }) {
    const [voteChange, setVoteChange] = useState(0);

    const increaseVote = (increase) => {
        setVoteChange((currChange) => {
            return currChange + increase;
        });
        patchCommentById(comment.comment_id, increase);
    };

    const decreaseVote = (decrease) => {
        setVoteChange((currChange) => {
            return currChange + decrease;
        });
        patchCommentById(comment.comment_id, decrease);
    };

    const votes = comment.votes;
    const votingText = votes + voteChange;

    let date = comment.created_at.slice(0, 10).replace(/-/g, " ").split(" ");
    let time = comment.created_at.slice(11, 19);

    let realDate = `${date[2]}/${date[1]}/${date[0]} ${time}`;

    return (
        <div>
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
        </div>
    );
}

export default CommentVotes;
