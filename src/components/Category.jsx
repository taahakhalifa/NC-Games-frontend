import React from 'react'

function Categroy() {
  return (
    <div class="dropdown">
    <button>Category</button>
    <div class="dropdown-content">
      <a class="dropdown-item" value="all">All</a>
      <a class="dropdown-item" value="strategy">Strategy</a>
      <a class="dropdown-item" value="hidden-roles">Hidden Roles</a>
      <a class="dropdown-item" value="dexterity">Dexterity</a>
      <a class="dropdown-item" value="push-your-luch">Push Your Luck</a>
      <a class="dropdown-item" value="roll-and-white">Roll and White</a>
      <a class="dropdown-item" value="deck-building">Deck Building</a>
      <a class="dropdown-item" value="engine-building">Engine Building</a>
    </div>
  </div>
  )
}

export default Categroy