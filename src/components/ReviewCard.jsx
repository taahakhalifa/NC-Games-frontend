import React from 'react'
import { useNavigate } from "react-router-dom";


function ReviewCard({ reviews }) {
  const navigate = useNavigate()

  return (
    <div>
      <ul className='card-list'>
        {reviews.map((review) => {
        return  <li className="review-list" key={review.review_id}>
          <img src={review.review_img_url} alt={`${review.title} pic`} className="image-list-image"/>
            <h3>{review.title}</h3>
            <p className='author'>By: {review.owner}</p>
            <button variant='dark button' className='Read-Review' onClick={() => {navigate(`/reviews/${review.review_id}`)}}>Read Review</button>
          </li>
        })}
      </ul>
    </div>
  )
}

export default ReviewCard
