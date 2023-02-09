import React from 'react'

function SortBy() {
  return (

<div className="dropdown">
  <button>Sort By</button>
  <div className="dropdown-content">
    <a className="dropdown-item" value="all" href="#">All</a>
    <a className="dropdown-item" value="designer" href="#">Designer</a>
    <a className="dropdown-item" value="owner" href="#">Owner</a>
    <a className="dropdown-item" value="title" href="#">Title</a>
    <a className="dropdown-item" value="review_id" href="#">Review ID</a>
    <a className="dropdown-item" value="created_at" href="#">Date</a>
    <a className="dropdown-item" value="review_img_url" href="#">Review Image URL</a>
    <a className="dropdown-item" value="comment_couint" href="#">Comment Count</a>
    <a className="dropdown-item" value="votes" href="#">Votes</a>
  </div>
</div>
  )
}

export default SortBy
