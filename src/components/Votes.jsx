import React from "react";

function Votes({review}) {
    return (
        <div>
            <div className="vote-container">
                <div className="vote-button up-vote">Up</div>
                <p className="voting-text">{review.votes}</p>
                <div className="vote-button down-vote">Down</div>
            </div>
        </div>
    );
}

export default Votes;
