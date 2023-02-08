import React from 'react'

function SortBy() {
  return (

<div class="dropdown">
  <button>Sort By</button>
  <div class="dropdown-content">
    <a class="dropdown-item" value="all">All</a>
    <a class="dropdown-item" value="designer">Designer</a>
    <a class="dropdown-item" value="owner">Owner</a>
    <a class="dropdown-item" value="title">Title</a>
    <a class="dropdown-item" value="review_id">Review ID</a>
    <a class="dropdown-item" value="created_at">Date</a>
    <a class="dropdown-item" value="review_img_url">Review Image URL</a>
    <a class="dropdown-item" value="comment_couint">Comment Count</a>
    <a class="dropdown-item" value="votes">Votes</a>
  </div>
</div>
  )
}

export default SortBy
