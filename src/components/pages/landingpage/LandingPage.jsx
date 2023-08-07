import './LandingPage.scss';
import Hero from './Hero'
import { FaAward  } from 'react-icons/fa';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';


import land1 from '../../../assets/find-your-perfect-angle-1500-test-2.png';
import land2 from '../../../assets/works-empty-or-full-1500-test.png';
import land3 from '../../../assets/no-iphone-no-problem-1500-test.png';
import land4 from '../../../assets/bloggif_641b5ebb12cbf.gif';




function LandingPage() {

  return (
    <div className="landing-page" >
       <Hero />
  
      <div className='section-1'>
        <div className='section-1-img-cont'>
            <img src={land1} alt='land-image' className='land-image'/>
        </div>
        <div className='section-1-text-cont'>
            <h3 className='section-1-h3'>Find your perfect angle</h3>
            <p className='section-1-p'>
               With a 90-degree hinge and adjustable positioning for both portrait and landscape use, Ringo™ ensures that your device is always at the perfect angle for that selfie, zoom call, or timer'ed group photo.
            </p>
        </div>
     </div>
    
     <div className='section-2'>
        <div className='section-2-img-cont'>
            <img src={land2} alt='land-image' className='land-image'/>
        </div>
        <div className='section-2-text-cont'>
            <h3 className='section-2-h3'>Works empty or full</h3>
            <p className='section-2-p'>
              We designed Ringo™ to work flawlessly as a secure and convenient phone mount no matter how much (or how little!) liquid is in the bottle. Don't worry about refilling your bottle so it stays upright - Ringo™ just works. Tap and swipe away!
            </p>
        </div>
     </div>
     
      <div className='section-3'>
        <div className='section-3-img-cont'>
            <img src={land3} alt='land-image' className='land-image'/>
        </div>
        <div className='section-3-text-cont'>
            <h3 className='section-3-h3'>No iphone? No problem</h3>
            <p className='section-3-p'>
              MagSafe technology is built-in to every iPhone 12 (launched in 2020) and above, so you don't need anything other than your phone to enjoy Ringo™.

              If you don't have a MagSafe compatible phone or case, we developed a Magnetic Booster Ring that makes Ringo™ compatible with any device - including older iPhones, non-Apple phones, and even tablets like the iPad 12.9"!
              
              Magnetic Booster Ring not included with Ringo. If you need one, please make sure to add one to your order.
            </p>
        </div>
     </div>
     
      <div className='section-4'>
        <div className='section-4-img-cont'>
            <img src={land4} alt='land-image' className='land-image'/>
        </div>
        <div className='section-4-text-cont'>
            <h3 className='section-4-h3'>Find your lifestyle</h3>
            <p className='section-4-p'>
              The true usefulness of Ringo only really hits home once you've been using it for a while - and its uses are endless. Entertaining kids, keeping your phone off of the sand at the beach, using it at a bedside alarm, recording your tennis practice, your golf swing, your wake-surfing, using it to help you navigate while driving - how will you Ringo?
            </p>
        </div>
     </div>
    
    
     <div className='warranty-cont'>
         <div className='warranty-1-section'>
             <FaAward className='warranty-1-icon'/>
              <h3 className='warranty-1-section-h3'>1 YEAR WARRANTY</h3>
               <p className='warranty-1-section-p'>
                 We stand behind our VENTY and will make sure you are covered from any manufacture defect.
            </p>
         </div>
         
         <div className='warranty-1-section'>
             <BsFillCheckCircleFill className='warranty-1-icon'/>
              <h3 className='warranty-1-section-h3'>30 DAY MONEY BACK GUARANTEE</h3>
               <p className='warranty-1-section-p'>
                 Don't love it for some reason? Just contact our support and return it for a full product refund.
            </p>
         </div>
         
         <div className='warranty-1-section'>
             <BiSupport className='warranty-1-icon'/>
              <h3 className='warranty-1-section-h3'>EXCELLENT SUPPORT</h3>
               <p className='warranty-1-section-p'>
                Contact our live chat during business hours or contact us at support@ventyfan.com.
            </p>
         </div>
     </div>
     
      
    </div>
  );
}
export default LandingPage;

