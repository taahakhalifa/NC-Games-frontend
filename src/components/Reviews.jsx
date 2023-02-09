import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { ReviewContext } from '../contexts/ReviewContext';
import { getReviews } from "../utils/api"
import Nav from "./Nav"
import ReviewCard from './ReviewCard'

function Reviews() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { reviews, setReviews } = useContext(ReviewContext)


  useEffect(() => {
    getReviews()
    .then((reviewsFromApi) => {
      setIsLoading(false)
      setReviews(reviewsFromApi)
    })
    .catch((err) => {
      setIsLoading(true)
      setIsError(true)
    })
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error</p>
  }

  return (
    <section>
      <h2 className='list-title'>Reviews</h2>
      <Nav />
      <ReviewCard reviews={reviews}/>
    </section>
  )
}

export default Reviews
