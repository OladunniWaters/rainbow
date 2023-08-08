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
              <img alt="" src="https://res.cloudinary.com/dzutmmwkf/image/upload/v1680179150/Waters-Ecommerce/product2_vmtbfc.webp" />
            </div>
            <div>
              <img alt="" src="https://res.cloudinary.com/dzutmmwkf/image/upload/v1680179154/Waters-Ecommerce/product6_csfrpc.webp" />
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