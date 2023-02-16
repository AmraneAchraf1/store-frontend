import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/CardProduct/CardProduct'

import { getProducts } from '../store/Reducer/Product/ProductSlice'

const Product = () => {

    

    const dispatch = useDispatch()
    const {product} = useSelector((state)=> state)

    useEffect(()=> {
        dispatch(getProducts())
    },[dispatch])

    

  return (
    <Container>
          <div className="d-flex gap-3 pt-3 justify-content-center flex-wrap ">
          <CardProduct data= {product.data}/>
          </div>


    </Container>
  )
}

export default Product