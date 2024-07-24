import React, { useState, useEffect } from 'react';
import './App.css';

const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // Load liked state from localStorage on component mount
    const savedLiked = JSON.parse(localStorage.getItem('isLiked'));
    if (savedLiked !== null) {
      setIsLiked(savedLiked);
    }
  }, []);

  useEffect(() => {
    // Save liked state to localStorage whenever it changes
    localStorage.setItem('isLiked', JSON.stringify(isLiked));
  }, [isLiked]);

  const toggleLike = () => {
    setIsLiked(prev => !prev);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert('Link copied to clipboard!'))
      .catch(err => alert('Failed to copy link.'));
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Comfy New Apt. in Pueblo Libre!</h1>
        <div className="actions">
          <button title="Share" onClick={() => setIsModalVisible(true)}>
            <img src="images/share.png" alt="Share" width="20" />
          </button>
          <button
            className={`like-button ${isLiked ? 'liked' : ''}`}
            onClick={toggleLike}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>
      </div>

      {isModalVisible && (
        <div id="shareModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalVisible(false)}>&times;</span>
            <h2>Share this experience</h2>
            <div className="experience-info">
              <img src="images/earth-globe.png" alt="X-Mansion" />
              <div>
                <div id="experienceContent">Comfy New Apt. in Pueblo Libre!</div>
                <p id="guestDescription">A wonderful place to stay in the city.</p>
              </div>
            </div>
            <div className="share-options">
              <button id="copyLink" onClick={copyLink}>
                <i className="icon">🔗</i> Copy Link
              </button>
              <button><i className="icon">✉️</i> Email</button>
              <button><i className="icon">💬</i> Messages</button>
              <button><i className="icon">📱</i> WhatsApp</button>
              <button><i className="icon">💬</i> Messenger</button>
              <button><i className="icon">📘</i> Facebook</button>
              <button><i className="icon">🐦</i> Twitter</button>
              <button><i className="icon">⋯</i> More options</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
