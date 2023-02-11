import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ReviewContext } from '../contexts/ReviewContext';
import { getReviews } from "../utils/api"
import Nav from "./Nav"
import ReviewCard from './ReviewCard'


function Reviews() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { reviews, setReviews } = useContext(ReviewContext)
  const [searchParams] = useSearchParams();
  const sortByQuery = searchParams.get("sort_by");
  const orderByQuery = searchParams.get("order");


  useEffect(() => {
    getReviews(sortByQuery, orderByQuery)
    .then((reviewsFromApi) => {
      setIsLoading(false)
      setReviews(reviewsFromApi)
    })
    .catch((err) => {
      setIsLoading(true)
      setIsError(true)
    })
  }, [sortByQuery, orderByQuery])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error</p>
  }

  return (
    <section>
      <Nav />
      <ReviewCard reviews={reviews}/>
    </section>
  )
}

export default Reviews
