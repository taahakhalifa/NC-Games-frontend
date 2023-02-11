import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function SortBy() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const setSortByQuery = (sortByQuery) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set("sort_by", sortByQuery);
        setSearchParams(newParams);
        setDropdownVisible(false);
    };

    return (
        <div
            className="dropdown"
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
        >
            <button className="dropdown-button">Sort By</button>
            <div className="dropdown-content">
                {dropdownVisible && (
                    <>
                        <button
                            className="dropdown-item"
                            value="all"
                            onClick={() => {
                                setDropdownVisible(false);
                                navigate("/reviews");
                            }}
                        >
                            All
                        </button>
                        <button
                            className="dropdown-item"
                            value="designer"
                            onClick={() => setSortByQuery("designer")}
                        >
                            Designer
                        </button>
                        <button
                            className="dropdown-item"
                            value="owner"
                            onClick={() => setSortByQuery("owner")}
                        >
                            Owner
                        </button>
                        <button
                            className="dropdown-item"
                            value="title"
                            onClick={() => setSortByQuery("title")}
                        >
                            Title
                        </button>
                        <button
                            className="dropdown-item"
                            value="review_id"
                            onClick={() => setSortByQuery("review_id")}
                        >
                            Review ID
                        </button>
                        <button
                            className="dropdown-item"
                            value="created_at"
                            onClick={() => setSortByQuery("created_at")}
                        >
                            Date
                        </button>
                        <button
                            className="dropdown-item"
                            value="review_img_url"
                            onClick={() => setSortByQuery("review_img_url")}
                        >
                            Review Image URL
                        </button>
                        <button
                            className="dropdown-item"
                            value="comment_count"
                            onClick={() => setSortByQuery("comment_count")}
                        >
                            Comment Count
                        </button>
                        <button
                            className="dropdown-item"
                            value="votes"
                            onClick={() => setSortByQuery("votes")}
                        >
                            Votes
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default SortBy;
