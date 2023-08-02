import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import './Navbar.scss';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsHandbag } from 'react-icons/bs';


function Navbar() {
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
    <div>
       <nav class="navbar navbar-expand-xl">
        <div class="container">
          <a class="navbar-brand" href="/">Ringo</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <RxHamburgerMenu className='navbar-toggler-icon'/>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
              </li>
              <li class="nav-item">
               <a class="nav-link" href='/productPage'>Shop</a>
              </li>              
              <li class="nav-item">
                <a class="nav-link" href="/track">Track Order</a>
              </li>
               <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Policies
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Privacy Policy</a></li>
                  <li><a class="dropdown-item" href="#">Refund Policy</a></li>
                  <li><a class="dropdown-item" href="#">Shipping Policy</a></li>
                   <li><a class="dropdown-item" href="#">Terms of Service</a></li>
                </ul>
              </li>
            </ul>
            
            <ul className='profile-cart-cont'>
            <div className='shopping-cart' onClick={() => navigate('/cart')}>
              <BsHandbag className='cart' />
              <div className='totalQuantity-cont'><p className='totalQuantity'> {getTotalQuantity() || 0}</p></div>
            </div>
            </ul>

            
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;


