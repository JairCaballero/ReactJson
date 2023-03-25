import React from 'react'
import './Card.css'
import Button from '../Button/Button'

const Card = (props) => {
  return (
    <div className='product'>
      <img className='product__img' src={props.img} alt="product" />
      <h2 className='product__name'>{ props.name }</h2>
      <div className='product__details'>
        <p className='product__oldPrice'>{ props.oldPrice }</p>
        <p className='product__newPrice'>{ props.newPrice }</p>
        <Button />
      </div>
    </div>
  )
}

export default Card