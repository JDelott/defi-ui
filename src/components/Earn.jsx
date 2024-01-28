import React from "react";
import EarnCarousel from './EarnCarousel.jsx';
import './Earn.css';

function Earn() {
  return (
    <div className="container">
      <div className='earn-parent'>
        <div className='gold-earn'>
        <div>

          <EarnCarousel />
        </div>
          {/* You can add multiple instances of EarnCarousel with different props if needed */}
        </div>
        <div className="bottom-container ">

        <EarnCarousel />
        </div>
      </div>
    </div>
  );
}

export default Earn;
