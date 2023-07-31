import './Footer.scss'
import { FaRegCopyright} from 'react-icons/fa';

import card1 from '../../assets/Visa.png';
import card2 from '../../assets/Mastercard.png';
import card3 from '../../assets/Maestro.png';
import card4 from '../../assets/Amex.png';
import card5 from '../../assets/Dinners Club.png';
import card6 from '../../assets/Discover.png';
import card7 from '../../assets/UnionPay.png';



function Footer() {

  return (
   <footer class='footer'>
          <div className='quick-link'>
               <span class="copyright-1">Contact</span>
               <span class="copyright-1">Privacy Policy</span>
               <span class="copyright-1">Refund Policy</span>
               <span class="copyright-1">Shipping Policy</span>
               <span class="copyright-1">Terms of Service</span>
               <span class="copyright-1">About Us</span>
           </div>
           
           <div className='copyright-cont'>
                <span class="copyright-2"><FaRegCopyright />2023 The Kitlis Powered by Shopify
               </span>
           
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
               
   </footer>
  )
}

export default Footer