import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";


function Category() {
    const [searchParams, setSearchParams] = useSearchParams();

    const setCategoryQuery = (categoryQuery) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set("category", categoryQuery);
        setSearchParams(newParams);
    };
}

export default Category;