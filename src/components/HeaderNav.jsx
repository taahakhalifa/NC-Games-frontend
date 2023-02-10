import React from 'react'
import { Link } from 'react-router-dom'

function HeaderNav() {
  return (
    <div className='list-title-container'>
   <Link to='/reviews'>
    <h2 className='list-title-reviews'>Reviews</h2>
  </Link>
  <Link to='/categories'>
    <h2 className='list-title-categories'>Categories</h2>
  </Link>
</div>
  )
}

export default HeaderNav
