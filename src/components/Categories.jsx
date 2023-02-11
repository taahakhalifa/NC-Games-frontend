import React, { useEffect, useState } from 'react'
import { getCategories } from '../utils/api';
import CategoryCard from './CategoryCard';



function Categories() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [categories, setCategories] = useState({})


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