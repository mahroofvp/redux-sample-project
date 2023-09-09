import React from 'react'
import './CartButtons.css'
import { decrement, increment } from '../../../redux/Cart'
import { useDispatch, useSelector } from 'react-redux'
const AfterCart = ({ cartCount, productID }) => {
    
    const dispatch = useDispatch()
  return (
    <div className="after-cart">
        <button className="cart-counter-button" onClick={()=> dispatch(decrement(productID))}>-</button>
        <div className='cart-count'>{cartCount}</div>
        <button className="cart-counter-button"onClick={()=> dispatch(increment(productID))}>+</button>
    </div>
  )
}

export default AfterCart