import React from 'react';
import '../css/ProfileSection.css'; 
import pfp from '../assets/imageProfile.jpg'
import cardCount from './CardList.jsx'

function ProfileSection({ cardCount }) {

  return (
    <div className="profile">
      <div className="profile-name-image">
        <img src={pfp} alt="Profile" />
        <h1 className="profile-user-name">Jane Doe</h1>
      </div>
      <div className="profile-bio">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>
      </div>
      <div className="profile-stats">
        <ul>
          <li>{cardCount} posts</li>
          <li>188 followers</li>
          <li>206 following</li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileSection;
