import React from 'react'

function Categroy() {
  return (
    <div className="dropdown">
    <button>Category</button>
    <div className="dropdown-content">
      <a className="dropdown-item" value="all" href="#">All</a>
      <a className="dropdown-item" value="strategy" href="#">Strategy</a>
      <a className="dropdown-item" value="hidden-roles" href="#">Hidden Roles</a>
      <a className="dropdown-item" value="dexterity" href="#">Dexterity</a>
      <a className="dropdown-item" value="push-your-luch" href="#">Push Your Luck</a>
      <a className="dropdown-item" value="roll-and-white" href="#">Roll and White</a>
      <a className="dropdown-item" value="deck-building" href="#">Deck Building</a>
      <a className="dropdown-item" value="engine-building" href="#">Engine Building</a>
    </div>
  </div>
  )
}

export default Categroy