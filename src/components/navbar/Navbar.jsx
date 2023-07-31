import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import './Navbar.scss';
import { RxHamburgerMenu } from 'react-icons/rx';


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
          <a class="navbar-brand" href="/">WATERS</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <RxHamburgerMenu className='navbar-toggler-icon'/>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/track">Track</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/shipping">Shipping</a>
              </li>              
             <li class="nav-item">
                <a class="nav-link" href="/terms">Terms</a>
              </li>
            </ul>
            
            <ul className='profile-cart-cont'>
             <li class="nav-item">
                <a class="profile" href='/dashboard'>Profile</a>
              </li>
              
            <div className='shopping-cart' onClick={() => navigate('/cart')}>
              <p className='cart'>Cart</p>
              <p className='totalQuantity'>{getTotalQuantity() || 0}</p>
            </div>
            </ul>

            
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;


