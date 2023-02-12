import React, { useEffect, useState, useContext } from 'react'
import { CategoriesContext } from '../contexts/CategoriesContext';
import { getCategories } from '../utils/api';
import CategoryCard from './CategoryCard';
import Header from "./Header"
import HeaderNav from "./HeaderNav"
import { Alert, AlertTitle } from "@mui/material";
import { Link } from "react-router-dom";

function Categories() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const {categories, setCategories} = useContext(CategoriesContext)
  const [error, setError] = useState()


  useEffect(() => {
    getCategories()
    .then((categoriesFromApi) => {
      setIsLoading(false)
      setCategories(categoriesFromApi)
    })
    .catch((err) => {
      setIsLoading(false)
      setIsError(true)
      setError(err)
    })
  }, [setCategories])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return (
        <Alert severity="error">
            {" "}
            <AlertTitle>
                <strong>{error.status}</strong>
            </AlertTitle>
            <p className="error-message">{error.data.msg}</p>
            <Link to="/">
                <button
                    className="back-button-error"
                    onClick={() => {
                        setIsError(false);
                    }}
                >
                    Go Back
                </button>
            </Link>
        </Alert>
    );
}

  return (
    <section>
      <Header />
            <HeaderNav />
      <CategoryCard categories={categories}/>
    </section>
  )
}

export default Categories