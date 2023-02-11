import React from 'react'
import { Link } from 'react-router-dom'

function CategoryCard({ categories }) {
  return (
    <div>
      <ul className='card-list'>
        {categories.map((category) => {
          const initialCategory = category.slug
          const categoryArray = initialCategory.split("-")
          const updatedCategoryArray = categoryArray.map((word)=> {
          return (word.charAt(0).toUpperCase() + word.slice(1))
          })
          const realCategory = updatedCategoryArray.join(" ")
        return  <li className="category-card" key={category.slug}>
            <h3 className='category-title'>{realCategory}</h3>
            <p className='category-description'>{category.description}</p>
            <Link
              to={`/reviews?category=${category.slug}`}
              className="view-games-button"
            >
              View Games
            </Link>
          </li>
        })}
      </ul>
</div>

  )
}

export default CategoryCard
