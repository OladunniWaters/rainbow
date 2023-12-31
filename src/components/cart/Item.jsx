import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cartSlice';
import './Item.scss'
import React, { useState } from 'react';





function Item({product}) {
  const {id, thumbnail, title, price} = product
  const dispatch = useDispatch()
  


  return (
    <div className="item">
      <div className='item-image-cont'>
        <img
        src={thumbnail}
        alt="item"
        className='item-image'
      />
      </div>
      <p className="item-title">{title}</p>
      <div className="item-info">
        <p className="item-price">${price} </p>

    <button onClick={() => { animate();  dispatch(addToCart({id, title, thumbnail, price}))  }} id='button' className='item-button'>
         Add to cart
    </button>


      </div>      
    </div>
  )
}

export default Item