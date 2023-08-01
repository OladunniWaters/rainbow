import './LandingPage.scss';


import land1 from '../../../assets/works-empty-or-full-1500-test.png';

function LandingPage() {

  return (
    <div className="landing-page" >
  
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
    

    </div>
  );
}
export default LandingPage;

