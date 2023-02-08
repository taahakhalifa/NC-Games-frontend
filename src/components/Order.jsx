import React from 'react'

function Order() {
  return (
 <div class="dropdown">
    <button>Order</button>
    <div class="dropdown-content">
      <a class="dropdown-item" value="desc">Descending (default)</a>
      <a class="dropdown-item" value="asc">Ascending</a>
    </div>
  </div>

  )
}


export default Order
