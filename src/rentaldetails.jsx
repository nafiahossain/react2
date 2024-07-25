import React, { useState } from 'react';
import './App.css';

const RentalDetails = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(prev => !prev);

  return (
    <div className="container">
        <div className="cont">
            <div className="details">
                <div className="left">
                <h2>Entire rental unit in Lima, Peru</h2>
                <p>2 guests · 1 bedroom · 1 bed · 1 bath</p>
                <p>
                    <img src="images/star.png" alt="Star Icon" />
                    <strong> New</strong>
                </p>
                </div>

                <hr />

                <div className="host-info">
                <img src="images/man.png" alt="Host" className="large-img" />
                <div>
                    <span><strong>Hosted by Fernando</strong></span>
                    <span className="spantext">Superhost · 7 years hosting</span>
                </div>
                </div>

                <hr />

                <div className="host-info">
                <img src="images/self.png" alt="Self Check-in" />
                <div>
                    <span><strong>Self Check-in</strong></span>
                    <span className="spantext">Check yourself in with the smartlock</span>
                </div>
                </div>

                <div className="host-info">
                <img src="images/superhost.png" alt="Superhost" />
                <div>
                    <span><strong>Fernando is a Superhost</strong></span>
                    <span className="spantext">Superhosts are experienced, highly rated hosts</span>
                </div>
                </div>

                <hr />

                <div className="translation">
                Some info has been automatically translated. <a href="#"><strong>Show original</strong></a>
                </div>

                <div className="description">
                <p>
                    Welcome to our brand-new 1 bedroom apartment, in a quiet and central location next to a park!
                </p>
                <br />
                <p>
                    It's conveniently located in Pueblo Libre, just 25min. away from the airport. Steps away from Clinica Stella Maris, Universidad Antonio Ruiz de Montoya, Instituto Británico, Hospital Santa Rosa, YMCA Peru and Alas Peruanas University. It's also very close to La ...{' '}
                    <span className="toggle" onClick={toggleShowMore}>{showMore ? 'Show less' : 'Show more'}</span>
                </p>
                </div>

                <hr />

                <div className="slee">
                <h2>Where you'll sleep</h2>
                <div className="gallery">
                    <img src="images/room2.jpg" alt="Bedroom" className="side-photo" />
                </div>
                <p><strong>Bedroom</strong></p>
                <p>1 double bed</p>
                </div>

                <hr />

                <div className="amenities-cont">
                <h2>What this place offers</h2>
                <div className="amenities">
                    <div>
                    <img src="images/kitchen.png" alt="Kitchen" className="amenities-img" /> Kitchen
                    </div>
                    <div>
                    <img src="images/wifi.png" alt="WiFi" className="amenities-img" /> WiFi
                    </div>
                    <div>
                    <img src="images/monitor.png" alt="TV" className="amenities-img" /> TV
                    </div>
                    <div>
                    <img src="images/elevator.png" alt="Elevator" className="amenities-img" /> Elevator
                    </div>
                    <div>
                    <img src="images/washer.png" alt="Washer" className="amenities-img" /> Washer
                    </div>
                    <div>
                    <img src="images/dryer.png" alt="Dryer" className="amenities-img" /> Dryer
                    </div>
                    <div>
                    <img src="images/hairdryer.png" alt="Hair dryer" className="amenities-img" /> Hair dryer
                    </div>
                    <div>
                    <img src="images/refrigerator.png" alt="Refrigerator" className="amenities-img" /> Refrigerator
                    </div>
                    <div>
                    <img src="images/gas.png" alt="Carbon monoxide alarm" className="amenities-img" /> <del>Carbon monoxide alarm</del>
                    </div>
                    <div>
                    <img src="images/fire-alarm.png" alt="Smoke alarm" className="amenities-img" /> <del>Smoke alarm</del>
                    </div>
                </div>
                <button className="amenities-show-all">Show all 32 amenities</button>
                </div>

                <hr />

                <div className="calendar-container">
                <h2>Select check-in date</h2>
                <p>Add your travel dates for exact pricing</p>
                <div className="calendars">
                    <div className="month">
                    <div className="month-header">
                        <span className="month-name">July 2024</span>
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <th>Su</th>
                            <th>Mo</th>
                            <th>Tu</th>
                            <th>We</th>
                            <th>Th</th>
                            <th>Fr</th>
                            <th>Sa</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="faded">30</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                        </tr>
                        <tr>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                            <td className="faded">1</td>
                            <td className="faded">2</td>
                            <td className="faded">3</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="month">
                    <div className="month-header">
                        <span className="month-name">August 2024</span>
                        <button className="next-month">›</button>
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <th>Su</th>
                            <th>Mo</th>
                            <th>Tu</th>
                            <th>We</th>
                            <th>Th</th>
                            <th>Fr</th>
                            <th>Sa</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="faded">28</td>
                            <td className="faded">29</td>
                            <td className="faded">30</td>
                            <td className="faded">31</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className="cal-footer">
                    <button className="keyboard-icon">⌨</button>
                    <button className="clear-dates">Clear dates</button>
                </div>
                </div>
            </div>

            <div className="sidebar">
                <h3>Add dates for prices</h3>
                <div className="form-group">
                <label htmlFor="checkin">Check-in</label>
                <input type="date" id="checkin" />
                </div>
                <div className="form-group">
                <label htmlFor="checkout">Checkout</label>
                <input type="date" id="checkout" />
                </div>
                <div className="form-group">
                <label htmlFor="guests">Guests</label>
                <select id="guests">
                    <option>1 guest</option>
                    <option>2 guests</option>
                    <option>3 guests</option>
                    <option>4 guests</option>
                </select>
                </div>
                <button>Check availability</button>
            </div>
        </div>
        <hr />
    </div>
  );
};

export default RentalDetails;
