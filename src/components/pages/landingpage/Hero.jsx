import './Hero.scss';

import hero1 from '../../../assets/Untitled_1.webm';


function Hero() {

  return (
    <div className="Hero" >
       <div className='section-1-img-cont'>
            <img src={hero1} alt='hero-video' className='hero-video'/>
        </div>
        <div className='section-1-text-cont'>
            <h3 className='section-1-h3'>ORDER DURING THE SUMMER & SAVE BIG</h3>
            <a href='/productpage' className='hero-a'>Order Now</a>
        </div>
    </div>
  );
}
export default Hero;

