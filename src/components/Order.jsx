import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Order() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const setOrderQuery = (orderQuery) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set("order", orderQuery);
        setSearchParams(newParams);
        setDropdownVisible(false);
    };

    return (
        <div
            className="dropdown"
            onMouseEnter={() => {
                setDropdownVisible(true);
            }}
            onMouseLeave={() => {
                setDropdownVisible(false);
            }}
        >
            <button className="dropdown-button">Order</button>
            <div className="dropdown-content">
                {dropdownVisible && (
                    <>
                        <button
                            className="dropdown-item"
                            value="all"
                            onClick={() => setOrderQuery("desc")}
                        >
                            Descending (default)
                        </button>
                        <button
                            className="dropdown-item"
                            value="designer"
                            onClick={() => setOrderQuery("asc")}
                        >
                            Ascending
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Order;
