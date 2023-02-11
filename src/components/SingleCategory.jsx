import { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { getReviewsByCategory } from "../utils/api"
import Nav from "./Nav";


const SingleCategory = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [categoryReviews, setCategoryReviews] = useState([]);
  const [searchParams] = useSearchParams();
  const sortByQuery = searchParams.get("sort_by");
  const orderByQuery = searchParams.get("order");

  useEffect(() => {
    getReviewsByCategory(slug, sortByQuery, orderByQuery).then((reviewsFromApi) => {
      setCategoryReviews(reviewsFromApi);
      setIsLoading(false);
    }).catch((err) => {
      setIsLoading(true)
      setIsError(true)
    })
  }, [slug, sortByQuery, orderByQuery]);

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error</p>
  }

  return (
    <div>
      <Nav />

      <ul className='card-list'>
        {categoryReviews.map((review) => {
          return <li className="review-list" key={review.review_id}>
            <img src={review.review_img_url} alt={`${review.title} image`} className="image-list-image" />
            <h3>{review.title}</h3>
            <p className='author'>By: {review.owner}</p>
            <button variant='dark button' className='Read-Review' onClick={() => { navigate(`/reviews/${review.review_id}`) }}>Read Review</button>
          </li>
        })}
      </ul>
    </div>
  )
}
export default SingleCategory;