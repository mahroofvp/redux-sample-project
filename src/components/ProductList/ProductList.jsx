import React from 'react'
import "./ProductList.css"
import Products from '../../api/product.json'
import BeforeCart from './CartButtons/BeforeCart'
import AfterCart from './CartButtons/AfterCart'
import { useSelector } from 'react-redux'
import CartButtons from './CartButtons'
const ProductList = () => {
    const {  cartList } = useSelector((state)=> state.cart)
    console.log(cartList);
  return (
    <section className='container'><div>
     </div>
        {Products.map((product, key)=>(
            <div className="product-container" key={key}>
                <img src={product.image} alt="" />
                <h3>{product.title}</h3>
                <CartButtons product={product} />
                
            </div>
           
        ))}
    </section>
  )
}

export default ProductList
