import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div>
            <h2 className="heading text-center mt-2">Welcome to the Redux toolkit store</h2>
            <section className="text-center">
                <h3 >Products</h3>
                <Products />
            </section>
        </div>
  )
}

export default Home
