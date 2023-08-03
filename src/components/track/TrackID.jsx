import React, { useState } from 'react';
import "./Track.scss"

function TrackingComponent() {
  const [trackingNumber, setTrackingNumber] = useState('');

  const doTrack = () => {
    if (trackingNumber === '') {
      alert('Enter your number.');
      return;
    }

    YQV5.trackSingle({
      YQ_ContainerId: 'YQContainer',
      YQ_Height: 560,
      YQ_Fc: '0',
      YQ_Lang: 'en',
      YQ_Num: trackingNumber,
    });
  };

  return (
    <div className='track-cont'>
       <h3 className='track-header'>Track Your Order</h3>
       <p className='track-p'>Please enter your tracking number below</p>
       
    <div className='track-input-cont'>
      {/* Tracking number input box. */}
      <input
        className='track-input'
        type="text"
        id="YQNum"
        maxLength="50"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
      />
      {/* The button is used to call the doTrack method. */}
      <input className='track-button' type="button" value="TRACK" onClick={doTrack} />
      {/* Container to display the tracking result. */}
      <div id="YQContainer"></div>
    </div>
    </div>
  );
}

export default TrackingComponent;
