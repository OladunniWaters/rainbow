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
               <a class="copyright-1" href="/contact">Contact</a>
               <a class="copyright-1" href="/privacy">Privacy Policy</a>
               <a class="copyright-1" href="/refund">Refund Policy</a>
               <a class="copyright-1" href="/shipping">Shipping Policy</a>
               <a class="copyright-1" href="/terms">Terms of Service</a>
               <a class="copyright-1" href="/aboutus">About Us</a>
           </div>
           
           <div className='copyright-cont'>
                <span class="copyright-2"><FaRegCopyright />2020 MudBuster
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