import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/Cart/CartItem'
import { getCartItems } from '../store/Reducer/Cart/CartSlice'

const Cart = () => {

  const dispatch = useDispatch()
  const {data, isLoading} = useSelector(state=>state.cart)


  useEffect(()=>{
      dispatch(getCartItems())
  }, [dispatch])

  return (
    <Container className='pt-3'>
       <CartItem data={data} isLoading={isLoading}/>
    </Container>
  )
}

export default Cart