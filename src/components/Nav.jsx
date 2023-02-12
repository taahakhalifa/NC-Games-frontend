import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom';
import Order from './Order'
import SortBy from './SortBy'



function Nav() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate()

  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");

  return (
<nav>
  <div className='Nav'>
  <SortBy />
  <Order />
  </div>
  {sortByQuery || orderQuery ? (
    <button className='reset-button-for-query' onClick={() => {navigate("/reviews")}}>Reset</button>
  ) : null}
</nav>
  )
}

export default Nav


