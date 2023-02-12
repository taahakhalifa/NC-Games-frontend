import React from "react";
import { useSearchParams } from "react-router-dom";

function Pages({ reviews }) {
    const [searchParams, setSearchParams] = useSearchParams();

    const setPageQuery = (pageQuery) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set("p", pageQuery);
        setSearchParams(newParams);
    };

    const categoryQuery = searchParams.get("category");

    return (
        <div className="page-button-layout">
            <button
                className="button-page"
                onClick={() => {
                    setPageQuery("1");
                }}
                disabled={categoryQuery}
            >
                Page 1
            </button>
            <button
                className="button-page"
                onClick={() => {
                    setPageQuery("2");
                }}
                disabled={categoryQuery}
            >
                Page 2
            </button>
            <button
                className="button-page"
                onClick={() => {
                    setPageQuery("3");
                }}
                disabled={categoryQuery}
            >
                Page 3
            </button>
            {39 > reviews.length > 30 && (
                <button
                    className="button-page"
                    onClick={() => {
                        setPageQuery("4");
                    }}
                    disabled={categoryQuery}
                >
                    Page 4
                </button>
            )}
            {49 > reviews.length > 40 && (
                <button
                    className="button-page"
                    onClick={() => {
                        setPageQuery("5");
                    }}
                    disabled={categoryQuery}
                >
                    Page 4
                </button>
            )}
            {59 > reviews.length > 50 && (
                <button
                    className="button-page"
                    onClick={() => {
                        setPageQuery("6");
                    }}
                    disabled={categoryQuery}
                >
                    Page 4
                </button>
            )}
        </div>
    );
}

export default Pages;
