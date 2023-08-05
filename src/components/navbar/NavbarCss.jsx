import "./NavbarCss.scss";
import { RxHamburgerMenu } from 'react-icons/rx';

import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { BsHandbag } from 'react-icons/bs';


function NavbarCss() {
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }
  
  
  
  return (
    <div class="navbar">
       <div className='navbar-cont container'>
          <div className='offcanvas-cont'>
          <div className='cart-cont-1'>
                <div className='shopping-cart' onClick={() => navigate('/cart')}>
                  <BsHandbag className='cart' />
                  <div className='totalQuantity-cont'><p className='totalQuantity'> {getTotalQuantity() || 0}</p></div>
                </div>
           </div>
          
           <a class="navbar-brand" href="/">Ringo</a>
            <button class="offcanvas-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                <RxHamburgerMenu className='hamburger'/>
              </button>
              
              <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <div>
                    I will not close if you click outside of me.
                  </div>
                </div>
              </div>
  
           </div>   
              
            <ul class="nav-link-cont">
              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
              </li>
              <li class="nav-item">
               <a class="nav-link" href='/shop'>Shop</a>
              </li>              
              <li class="nav-item">
                <a class="nav-link" href="/track">Track</a>
              </li>
               <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Policies
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/refundpolicy">Refund Policy</a></li>
                  <li><a class="dropdown-item" href="/shippingpolicy">Shipping Policy</a></li>
                  <li><a class="dropdown-item" href="/terms"> Terms of Service</a></li>
                  <li><a class="dropdown-item" href="/terms"></a>Privacy Policy</li>
                </ul>
              </li>
            </ul>
            
            <div className='cart-cont'>
                <div className='shopping-cart' onClick={() => navigate('/cart')}>
                  <BsHandbag className='cart' />
                  <div className='totalQuantity-cont'><p className='totalQuantity'> {getTotalQuantity() || 0}</p></div>
                </div>
           </div>
       </div>
 </div>   
  );
}
export default NavbarCss;


