import React, { useEffect, useState, useContext } from 'react'
import { CategoriesContext } from '../contexts/CategoriesContext';
import { getCategories } from '../utils/api';
import CategoryCard from './CategoryCard';

function Categories() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const {categories, setCategories} = useContext(CategoriesContext)


  useEffect(() => {
    getCategories()
    .then((categoriesFromApi) => {
      setIsLoading(false)
      setCategories(categoriesFromApi)
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
      <CategoryCard categories={categories}/>
    </section>
  )
}

export default Categories