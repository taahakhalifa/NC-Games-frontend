import React from 'react'

function ReviewCard({ reviews }) {
  return (
    <div>
      <ul className='card-list'>
        {reviews.map((review) => {
        return  <li className="review-list" key={review.review_id}>
          <img src={review.review_img_url} alt={`${review.title} image`} className="image-list-image"/>
            <h3>{review.title}</h3>
            <p className='author'>By: {review.owner}</p>
            <button variant='dark button' className='Read-Review'>Read Review</button>
          </li>
        })}
      </ul>
    </div>
  )
}

export default ReviewCard
