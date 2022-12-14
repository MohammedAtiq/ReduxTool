import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux/CartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart)

  const removeCart = (productId) => {
    dispatch(remove(productId))
  }
  return (
    <div className="container">
      <div className="row text-center">
        { items.length !== 0 ?
            items.map((product) => (
              <div className="col-sm-3">
                <div className="card  mx-auto" >
                  <img src={product.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">$ : {product.price}</p>
                    <button className="btn btn-danger" onClick={() => removeCart(product.id)}>Remove</button>
                  </div>
                </div>
              </div>
            )):<h1>nothing in cart</h1>
        } 
      </div>
    </div>
  )
}

export default Cart
