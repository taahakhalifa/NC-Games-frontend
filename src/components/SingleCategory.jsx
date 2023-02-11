import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getReviewsByCategory } from "../utils/api"

const SingleCategory = () => {
  const { slug } = useParams();
  const [categoryReviews, setCategoryReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getReviewsByCategory(slug).then((reviewsFromApi) => {
      console.log(reviewsFromApi);
      setCategoryReviews(reviewsFromApi);
      setIsLoading(false);
    }).catch((err) => {
      setIsLoading(true)
      setIsError(true)
    })
  }, [slug]);

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error</p>
  }

  return (
    <div>
      <ul className='card-list'>
        {categoryReviews.map((review) => {
        return  <li className="review-list" key={review.review_id}>
          <img src={review.review_img_url} alt={`${review.title} image`} className="image-list-image"/>
            <h3>{review.title}</h3>
            <p className='author'>By: {review.owner}</p>
            <button variant='dark button' className='Read-Review' onClick={() => {navigate(`/reviews/${review.review_id}`)}}>Read Review</button>
          </li>
        })}
      </ul>
    </div>
  )
      }
export default SingleCategory;