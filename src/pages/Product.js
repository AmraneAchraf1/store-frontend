import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/CardProduct'
import { getProducts } from '../store/Reducer/Product/ProductSlice'

const Product = () => {

    

    const dispatch = useDispatch()
    const {product} = useSelector((state)=> state)

    useEffect(()=> {
        dispatch(getProducts())
    },[dispatch])

  return (
    <Container>

<CardProduct data= {product.data}/>
        
    </Container>
  )
}

export default Product