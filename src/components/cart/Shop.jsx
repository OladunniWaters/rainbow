import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cartSlice';
import './Shop.scss'
import React, { useState } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


import { FaStar } from 'react-icons/fa';


import card1 from '../../assets/Visa.png';
import card2 from '../../assets/Mastercard.png';
import card3 from '../../assets/Maestro.png';
import card4 from '../../assets/Amex.png';
import card5 from '../../assets/Dinners Club.png';
import card6 from '../../assets/Discover.png';
import card7 from '../../assets/UnionPay.png';


function Shop({product}) {
  const {id, thumbnail, title, price} = product
  const dispatch = useDispatch()
  


  return (
    <div className='shop'>
     <Carousel showStatus={false} showIndicators={false}>
        <div>
          <img alt="" src={thumbnail} />
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
                <h3 className="item-title">{title}</h3>
                <div className="discount-cont">
                     <p className="original-price">$100.00</p>
                     <p className="discount-price">$29.99</p>
                     <p className="sale-tag">Sale </p>
                </div>
                <div className="star-cont">
                   <div>
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                   </div>   
                   <p className='star-rating'>(299)</p>
                </div>
                <div className="item-info">
                    <p className="item-price">${price} </p>
                    <p className="item-price">In stock, ready to ship </p>
                  <button onClick={() => { animate();  dispatch(addToCart({id, title, thumbnail, price}))  }} id='button' className='item-button'>
                       BUY NOW
                  </button>
      
                    <div className='card-image-cont'>
                       <img src={card1} alt='card-image' className='card'/>
                       <img src={card2} alt='card-image' className='card'/>
                       <img src={card3} alt='card-image' className='card'/>
                       <img src={card4} alt='card-image' className='card'/>
                       <img src={card5} alt='card-image' className='card'/>
                       <img src={card6} alt='card-image' className='card'/>
                       <img src={card7} alt='card-image' className='card'/>
                     </div>
      
            </div>      
    </div>
    </div>
  )
}

export default Shop