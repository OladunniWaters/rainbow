import './Hero.scss';
import {useNavigate} from 'react-router-dom'


import hero1 from '../../../assets/Untitled_1.webm';
import hero2 from '../../../assets/videopreview.jobtemplate.mp4.342X192P_20HZ_350KBPS_VER_1_0.mp4';




function Hero() {
  const navigate = useNavigate()


  return (
    <div className="Hero" >
       <div className='hero-1-video-cont'>
            <video autoPlay="autoplay" loop="loop" muted className='video'>
                <source src={hero2} type="video/webm" />
                Sorry, your browser doesn't support videos.
            </video>
           
            <div className='hero-1-text-cont'>
                <h3 className='hero-h3'>Transform Muddy Paws into Pristine Perfection - Unleash Clean Adventures with MudBuster!</h3>
                <div className='hero-a effect-1'  onClick={() => navigate('/shop')}>Order Now</div>
            </div>
        </div>
       
    </div>
  );
}
export default Hero;

