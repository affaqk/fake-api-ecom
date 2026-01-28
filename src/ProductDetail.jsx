import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct]  = useState();

  const getProductDetail = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(response.data)
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    getProductDetail()
  },[])
  return (
    <div>
      <img src={product?.image} alt="" />
    </div>
  )
}

export default ProductDetail
