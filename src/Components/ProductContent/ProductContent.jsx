import React from 'react'
import './ProductContent.css'

const ProductContent = (props) => {
  return (
    <section className='product__section'>
      <h1 className='product__title'>Nuestros Productos</h1>
      <div className='product_container'>
        {props.children}
      </div>
    </section>
  )
}

//para no poderle canviar el nombre donde lo importemos
export { ProductContent }