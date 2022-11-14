import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../redux/CartSlice'
import { remove } from '../redux/CartSlice'
import { fetchProducts } from '../redux/ApiSlice'
import { STATUS } from '../redux/ApiSlice'


const Products = () => {
    const dispatch = useDispatch()
    const { data, status } = useSelector((state) => state.Api)
    const items = useSelector((state) => state.cart)
    // const [products, setProducts] = useState([])

    useEffect(() => {
        dispatch(fetchProducts())

        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products')
        //     const data = await res.json()
        //     console.log(data)
        //     setProducts(data)
        // }
        // fetchProducts()
    }, [])

    const handleClick = (product) => {
        dispatch(add(product))
    }

    const removeCart = (productId) => {
        dispatch(remove(productId))
    }

    if (status === STATUS.LOADING) {
        return <h1 className="btn btn-success">Loading...</h1>
    }
    if (status === STATUS.ERROR) {
        return <h1 className="btn btn-danger">Somthing went wrong...</h1>
    }
    return (
        <div className="container">
            <div className="row">
                {
                    data.map((product) => (
                        <div className="col-sm-3">
                            <div class="card" >
                                <img src={product.image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{product.title}</h5>
                                    <p class="card-text">$ : {product.price}</p>
                                  

                                    {items.some((p) => p.id === product.id) ?        
                                        (<button class="btn btn-danger" onClick={() => removeCart(product.id)}>Remove</button>):
                                        (<button class="btn btn-primary" onClick={() => handleClick(product)}>CART</button>)
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products
