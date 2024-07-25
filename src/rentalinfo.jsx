import React, { useState } from 'react';
import './App.css';

const RentalInfo = () => {
  const [showMoreReviews, setShowMoreReviews] = useState(false);
  const [showMoreHostInfo, setShowMoreHostInfo] = useState(false);
  const [showMoreHouseRules, setShowMoreHouseRules] = useState(false);
  const [showMoreSafety, setShowMoreSafety] = useState(false);

  return (
    <div className="container">
      <div>
        <h2>No Reviews (Yet)</h2>
        <div className="review">
          <img src="images/star.png" alt="reviews" />
          <div>
            <span>This host has 310 reviews for other places to stay.</span>
            <span 
              className="toggle" 
              onClick={() => setShowMoreReviews(prev => !prev)}
            >
              {showMoreReviews ? 'Hide other reviews' : 'Show other reviews'}
            </span>
          </div>
        </div>
      </div>

      <hr />

      <div>
        <h2>Where you'll be</h2>
        <p>Lima, Provincia de Lima, Peru</p>
        <div className="img-flex">
          <img src="images/googlemap.png" alt="Map" />
        </div>
        <br />
        <span 
          className="toggle" 
          onClick={() => setShowMoreReviews(prev => !prev)}
        >
          {showMoreReviews ? 'Hide other reviews' : 'Show other reviews'}
        </span>
      </div>

      <hr />

      <div>
        <h2>Meet your Host</h2>
        <div className="host-wrapper">
          <div className="left-column">
            <div className="host-info-box">
              <div className="host-profile">
                <img src="images/man.png" alt="Fernando" className="host-image" />
                <h2 className="host-name">Fernando</h2>
                <p className="superhost">Superhost</p>
              </div>
              <div className="stats">
                <div className="stat">
                  <div className="stat-value">310</div>
                  <div>Reviews</div>
                </div>
                <div className="stat">
                  <div className="stat-value">4.92 ★</div>
                  <div>Rating</div>
                </div>
                <div className="stat">
                  <div className="stat-value">7</div>
                  <div>Years hosting</div>
                </div>
              </div>
            </div>
            <p><span className="icon">🏠</span>Born in the 80s</p>
            <p><span className="icon">💼</span>My work: Hospitality</p>
            <p>Hello world! I love traveling and I also love welcoming guests in my home country, Perú, meeting new...</p>
            <div 
              className="show-more" 
              onClick={() => setShowMoreHostInfo(prev => !prev)}
            >
              {showMoreHostInfo ? 'Show less' : 'Show more ›'}
            </div>
          </div>
          <div className="host-details">
            <h3>Fernando is a Superhost</h3>
            <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
            <br />
            <h3>Co-hosts</h3>
            <div className="co-hosts">
              <img src="images/man.png" alt="Percy" className="co-host" />
              <img src="images/man.png" alt="Raul" className="co-host" />
            </div>
            <br />
            <h3>Host details</h3>
            <p>Response rate: 100%<br /><br />Responds within an hour</p>
            <button className="button">Message Host</button>
          </div>
        </div>
      </div>

      <hr />

      <div>
        <h2>Things to know</h2>
        <div className="info">
          <div className="info-option">
            <div><strong>House Rules</strong></div>
            <div>Check-in after 4:00 PM</div>
            <div>Checkout Before 11:00 AM</div>
            <div>2 guests maximum</div>
            <div 
              className="show-more" 
              onClick={() => setShowMoreHouseRules(prev => !prev)}
            >
              {showMoreHouseRules ? 'Show less' : 'Show more ›'}
            </div>
          </div>
          <div className="info-option">
            <div><strong>Safety and property</strong></div>
            <div>Carbon monoxide alarm not reported</div>
            <div>Smoke alarm not reported</div>
            <div>Not suitable for children and infants</div>
            <div 
              className="show-more" 
              onClick={() => setShowMoreSafety(prev => !prev)}
            >
              {showMoreSafety ? 'Show less' : 'Show more ›'}
            </div>
          </div>
          <div className="info-option">
            <div><strong>Cancellation Policy</strong></div>
            <div>Add your trip dates to get the cancellation details for this stay.</div>
            <div className="show-more">Add dates ›</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalInfo;
