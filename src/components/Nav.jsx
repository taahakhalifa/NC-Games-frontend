import React from 'react'
import Order from './Order'
import SortBy from './SortBy'

function Nav() {
  return (
<nav className='Nav'>
  <SortBy />
  <Order />
</nav>
  )
}

export default Nav


