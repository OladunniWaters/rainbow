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

import { ToastContainer, toast } from 'react-toastify';



import land1 from '../../assets/chrome_image_Aug 10, 2023 4_01_19 PM GMT+01_00.png';
import land2 from '../../assets/chrome_image_Aug 10, 2023 3_30_04 PM GMT+01_00.png';
import land3 from '../../assets/chrome_image_Aug 10, 2023 4_01_45 PM GMT+01_00.png';
import land4 from '../../assets/71129YDLDEL._AC_SY879_.jpg';
import land5 from '../../assets/81uEmPvhyzL._AC_SY879_.jpg';
import land6 from '../../assets/71vM6RTH0vL._AC_SL1500_.jpg';
import land7 from '../../assets/61+xiC7m8jL._AC_SX466_.jpg';



function Shop({product}) {
  const {id, thumbnail, title, price} = product
  const dispatch = useDispatch()
  


  return (
    <div className='container'>
    
       <ToastContainer 
       position="top-center"
      />
    
        <div className='shop-cont'>
         <Carousel showStatus={false} showIndicators={false} showArrows={false}>
            <div className='prdouct-image-item'>
              <img alt="" src={thumbnail} />
            </div>
            <div>
              <img alt="" src={land2} />
            </div>
            <div>
              <img alt="" src={land3} />
            </div>
           
      </Carousel>
        
        <div className="item">
                    <h3 className="item-title">{title}</h3>
                    <div className="star-cont">
                       <div>
                          <FaStar className='star'/>
                          <FaStar className='star'/>
                          <FaStar className='star'/>
                          <FaStar className='star'/>
                          <FaStar className='star'/>
                       </div>   
                       <p className='star-rating'>(310)</p>
                    </div>
                    
                       <p className="sale-tag"> Summer Sale </p>
                    
                    <div className="discount-cont">
                         <p className="original-price">$100.00</p>
                         <p className="discount-price">${price}</p>
                    </div>
                  
                    
                    
                    <div className="item-info">
                        <p className="item-price"></p>
                      <button onClick={() => {dispatch(addToCart({id, title, thumbnail, price})); toast.success('Item added to cart successfully')  }} id='button' className='item-button'>
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
     </div>     
  )
}

export default Shop