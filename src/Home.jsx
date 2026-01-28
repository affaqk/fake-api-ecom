import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      setProducts(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getAllProducts()
  },[])
  return (
    <div className='container'>
      <div className="row products">
        {
          products.map((product)=>(
            <div className="col-lg-4 col-sm-6 col-12">
              <Link to = {`/product-detail/${product.id}`}>
              <img src={product.image} alt="" />
              <h4>{product.title}</h4>
              <p>Price : {product.price}</p>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home
