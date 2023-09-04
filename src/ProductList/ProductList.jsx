import React from 'react'
import "./ProductList.css"
import Products from '../../src/api/product.json'
import BeforeCart from './CartButtons/BeforeCart'
import AfterCart from './CartButtons/AfterCart'

const ProductList = () => {
    
  return (
    <section className='container'><div>
        
    </div>
        {Products.map((product, key)=>(
            <div className="product-container" key={key}>
                <img src={product.image} alt="" />
                <h3>{product.title}</h3>
                <BeforeCart/>
                <AfterCart/>
                
            </div>
           
        ))}
    </section>
  )
}

export default ProductList
