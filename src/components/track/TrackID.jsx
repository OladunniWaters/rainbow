import React, { useState } from 'react';

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
    <div>
      {/* Tracking number input box. */}
      <input
        type="text"
        id="YQNum"
        maxLength="50"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
      />
      {/* The button is used to call the doTrack method. */}
      <input type="button" value="TRACK" onClick={doTrack} />
      {/* Container to display the tracking result. */}
      <div id="YQContainer"></div>
    </div>
  );
}

export default TrackingComponent;
