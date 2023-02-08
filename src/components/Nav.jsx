import React from 'react'
import Category from './Category'
import Order from './Order'
import SortBy from './SortBy'

function Nav() {
  return (
<nav className='Nav'>
  <SortBy />
  <Category />
  <Order />
</nav>
  )
}

export default Nav


