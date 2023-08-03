import './Hero.scss';
import ReactPlayer from 'react-player';
import hero1 from '../../../assets/Untitled_1.webm';


function Hero() {

  return (
    <div className="Hero" >
       <div className='section-1-img-cont'>
            <video autoPlay="autoplay" loop="loop" muted>
                <source src={hero1} type="video/webm" />
                Sorry, your browser doesn't support videos.
            </video>

        </div>
        <div className='section-1-text-cont'>
            <h3 className='section-1-h3'>ORDER DURING THE SUMMER & SAVE BIG</h3>
            <a href='/productpage' className='hero-a'>Order Now</a>
        </div>
    </div>
  );
}
export default Hero;

