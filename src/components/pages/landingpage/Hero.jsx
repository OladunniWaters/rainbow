import './Hero.scss';
import hero1 from '../../../assets/Untitled_1.webm';


function Hero() {

  return (
    <div className="Hero" >
       <div className='hero-1-video-cont'>
            <video autoPlay="autoplay" loop="loop" muted className='video'>
                <source src={hero1} type="video/webm" />
                Sorry, your browser doesn't support videos.
            </video>
           
            <div className='hero-1-text-cont'>
                <h3 className='hero-h3'>ORDER DURING THE SUMMER & SAVE BIG</h3>
                <div className='hero-a effect-1' onClick={() => navigate('/shop')}>Order Now</div>
            </div>
        </div>
       
    </div>
  );
}
export default Hero;

