import './LandingPage.scss';
import Hero from './Hero'
import { FaAward  } from 'react-icons/fa';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';



import land1 from '../../../assets/chrome_image_Aug 10, 2023 4_01_45 PM GMT+01_00.png';
import land2 from '../../../assets/chrome_image_Aug 10, 2023 4_01_19 PM GMT+01_00.png';
import land3 from '../../../assets/chrome_image_Aug 10, 2023 3_30_04 PM GMT+01_00.png';
import land4 from '../../../assets/71129YDLDEL._AC_SY879_.jpg';
import land5 from '../../../assets/81uEmPvhyzL._AC_SY879_.jpg';
import land6 from '../../../assets/71vM6RTH0vL._AC_SL1500_.jpg';
import land7 from '../../../assets/61+xiC7m8jL._AC_SX466_.jpg';
//import land8 from '../../../assets/61+xiC7m8jL._AC_SX466_.jpg';


function LandingPage() {

  return (
    <div className="landing-page" >
       <Hero />
  
      <div className='section-1'>
        <div className='section-1-img-cont'>
            <img src={land1} alt='land-image' className='land-image1'/>
        </div>
        <div className='section-1-text-cont'>
            <h3 className='section-1-h3'>Effortless Paw Cleaning at Your Fingertips</h3>
            <p className='section-1-p'>
              Experience the ultimate convenience with our MudBuster – your go-to solution for pristine paws. Simply moisten, place the muddied paw, give a gentle twist, pat it dry, and move on to the next. With a swift process that takes care of all four paws, you'll have clean companions in no time.

                Maintenance is a breeze too! Detach the lid and unfurl the bristles for quick and thorough cleaning. Rinse for the next round of spotless paw pampering. Say goodbye to mess and hello to hassle-free paw perfection with MudBuster!
            </p>

        </div>
     </div>
     
    
     <div className='section-2'>
        <div className='section-2-img-cont'>
            <img src={land2} alt='land-image' className='land-image2'/>
        </div>
        <div className='section-2-text-cont'>
            <h3 className='section-2-h3'>Velvety Soft Silicone Bristles</h3>
            <p className='section-2-p'>
             Our MudBuster boasts soft, supple silicone bristles designed to effortlessly dislodge dirt and mud, leaving your furry friend's paws refreshingly clean. Bid farewell to muddy tracks in your cherished spaces – let the MudBuster keep the mess at bay, ensuring your car and home stay pristine. What's more, rest assured knowing the MudBuster is crafted with BPA-free materials for the utmost safety and care. Your dog deserves the best, and so do you!
            </p>
        </div>
     </div>
     
      <div className='section-3'>
        <div className='section-3-img-cont'>
            <img src={land3} alt='land-image' className='land-image3'/>
        </div>
        <div className='section-3-text-cont'>
            <h3 className='section-3-h3'>Unleash Adventure, Rain or Shine!</h3>
            <p className='section-3-p'>
             Equip yourself with the MudBuster – the ultimate companion for your dynamic dog and those unpredictable rainy days. Whether it's an invigorating hike, a leisurely stroll, or a playful rendezvous at the park, the MudBuster is your go-to tool for pristine paws, always within reach.

              Position it strategically by your backdoor, ensuring a seamless transition from outdoor escapades to indoor comfort. With the MudBuster's magic touch, your dog's paws will be impeccably clean before they step foot into your cherished home. Make every adventure a memorable one, minus the mess, with the indispensable MudBuster by your side!
            </p>
        </div>
     </div>
     
      <div className='section-4'>
        <div className='section-4-img-cont'>
          <img src={land4} alt='land-image' className='land-image4'/>
        </div>
        <div className='section-4-text-cont'>
            <h3 className='section-4-h3'>Luxurious Bonus: Three Premium Absorbent Towels Included!</h3>
            <p className='section-4-p'>
             As a token of our commitment to your dog's comfort and cleanliness, the MudBuster arrives with an exquisite gift – three top-tier absorbent towels. Delight in the opulence of drying your furry friend's paws with these high-quality, super-absorbent towels, specially tailored to complement the MudBuster experience.

               Say goodbye to damp, muddy pawprints and revel in the luxury of a thoughtful, practical bonus that adds a touch of indulgence to your pup's post-adventure pampering routine. Elevate your paw-cleaning ritual with the ultimate duo – MudBuster and premium absorbent towels. Your dog's paws deserve nothing less!
            </p>
        </div>
     </div>
    
    
     <div className='warranty-cont'>
         <div className='warranty-1-section'>
             <FaAward className='warranty-1-icon'/>
              <h3 className='warranty-1-section-h3'>1 YEAR WARRANTY</h3>
               <p className='warranty-1-section-p'>
                 Experience worry-free ownership with our exclusive 2-year warranty, a testament to the unwavering quality and performance of the MudBuster.
            </p>
         </div>
         
         <div className='warranty-1-section'>
             <BsFillCheckCircleFill className='warranty-1-icon'/>
              <h3 className='warranty-1-section-h3'>30 DAY MONEY BACK</h3>
               <p className='warranty-1-section-p'>
               
                 Don't love it for some reason? we proudly offer a 30-day hassle-free return policy, providing you with the freedom to make your decision with absolute peace of mind and a full product refund.
            </p>
         </div>
         
         <div className='warranty-1-section'>
             <BiSupport className='warranty-1-icon'/>
              <h3 className='warranty-1-section-h3'>EXCELLENT SUPPORT</h3>
               <p className='warranty-1-section-p'>
               Should you ever encounter any concerns or queries, our dedicated support team stands ready to assist. Your satisfaction is our priority, and we guarantee a prompt response within 24 hours, ensuring your needs are met swiftly and comprehensively.
            </p>
         </div>
     </div>
     
      
    </div>
  );
}
export default LandingPage;

