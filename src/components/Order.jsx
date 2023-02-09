import React from 'react'

function Order() {
  return (
 <div className="dropdown">
    <button>Order</button>
    <div className="dropdown-content">
      <a className="dropdown-item" value="desc" href="#">Descending (default)</a>
      <a className="dropdown-item" value="asc" href="#">Ascending</a>
    </div>
  </div>

  )
}


export default Order
