import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css"

const Product = ({ product }) => {
    return (
        <div className="col-lg-3 col-sm6 col-12">
            <Link className='links' to = {`/product-detail/${product.id}`}>
            <img src={product.image} alt="" />
            <h3 className='p-heading'>{product.title}</h3>
            <p className='p-price'>{product.price}</p>
            </Link>
        </div>
        
    )
}

export default Product
