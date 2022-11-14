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

        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        <div className="col-sm-3 ">
                            <div className="card mx-auto" >
                                <img src={product.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">$ : {product.price}</p>
                                  

                                    {items.some((p) => p.id === product.id) ?        
                                        (<button className="btn btn-danger" onClick={() => removeCart(product.id)}>Remove</button>):
                                        (<button className="btn btn-primary" onClick={() => handleClick(product)}>CART</button>)
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
