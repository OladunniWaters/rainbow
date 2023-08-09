import "./Navbar.scss";
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
         <button class="offcanvas-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                <RxHamburgerMenu className='hamburger'/>
              </button>
                         
              <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="staticBackdropLabel">
                     <div class="navbar-brand" onClick={() => navigate('/')}>Ringo</div>
                  </h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <div>
                       <ul className="offcanvas-links">
                        <li class="nav-item">
                          <div class="nav-link" onClick={() => navigate('/contact')}>Contact</div>
                        </li>
                        <li class="nav-item">
                         <div class="nav-link" onClick={() => navigate('/shop')}>Shop</div>
                        </li>              
                        <li class="nav-item">
                          <div class="nav-link" onClick={() => navigate('/track')}>Track</div>
                        </li>
                         <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Policies
                          </a>
                          <ul class="dropdown-menu">
                           <li><div class="dropdown-item" onClick={() => navigate('/refundpolicy')} >Refund Policy</div></li>
                              <li><div class="dropdown-item" onClick={() => navigate('/shippingpolicy')} >Shipping Policy</div></li>
                              <li><div class="dropdown-item"onClick={() => navigate('/terms')} > Terms of Service</div></li>
                      
                          </ul>
                        </li>
                      </ul>
                  </div>
                </div>
              </div>   
              
               <div class="navbar-brand" onClick={() => navigate('/')}>Ringo</div>
               
            <ul class="nav-link-cont">
              <li class="nav-item">
                <div class="nav-link" onClick={() => navigate('/contact')}>Contact</div>
              </li>
              <li class="nav-item">
               <div class="nav-link" onClick={() => navigate('/shop')}>Shop</div>
              </li>              
              <li class="nav-item">
                <div class="nav-link" onClick={() => navigate('/track')}>Track</div>
              </li>
               <li class="nav-item dropdown">
                <div class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Policies
                </div>
                <ul class="dropdown-menu">
                  <li><div class="dropdown-item" onClick={() => navigate('/refundpolicy')} >Refund Policy</div></li>
                  <li><div class="dropdown-item" onClick={() => navigate('/shippingpolicy')} >Shipping Policy</div></li>
                  <li><div class="dropdown-item"onClick={() => navigate('/terms')} > Terms of Service</div></li>
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


