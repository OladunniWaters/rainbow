import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cartSlice';
import './Shop.scss'
import React, { useState } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";





function Shop({product}) {
  const {id, thumbnail, title, price} = product
  const dispatch = useDispatch()
  


  return (
    <>
     <Carousel autoPlay>
    <div>
      <img alt="" src="https://res.cloudinary.com/dzutmmwkf/image/upload/v1680324767/chrome_image_Apr_1_2023_4_32_24_AM_GMT_01_00_iitegu.webp" />
    </div>
    <div>
      <img alt="" src="https://res.cloudinary.com/dzutmmwkf/image/upload/v1680179150/Waters-Ecommerce/product2_vmtbfc.webp" />
    </div>
    <div>
      <img alt="" src="https://res.cloudinary.com/dzutmmwkf/image/upload/v1680179154/Waters-Ecommerce/product6_csfrpc.webp" />
    </div>
    <div>
      <img alt="" src="https://res.cloudinary.com/dzutmmwkf/image/upload/v1680324764/pngwing.com_o2wdnz.webp" />
    </div>
    <div>
      <img alt="" src="https://res.cloudinary.com/dzutmmwkf/image/upload/v1680179151/Waters-Ecommerce/product3_vkleqp.webp" />
    </div>
  </Carousel>
    
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
    </>
  )
}

export default Shop