import React from 'react'
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

const Navbar = () => {
  const items = useSelector((state)=> state.cart)
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page"to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/cart">Cart</Link>
        </li>
        <li class="nav-item">
          <p className='text-white mt-2'>total items : {items.length}</p>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
