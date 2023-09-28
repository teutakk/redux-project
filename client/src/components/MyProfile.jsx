import React from "react";

const MyProfile = () => {
  return (
    <div className="rocket-page">
      <p className="rocket-title">My Pofile</p>
      <div className="profile-bookins">
        <div className="booked">
          <p className="booked-title">My Rockets</p>
          <p className="booked-item">Falcon 1</p>
          <p className="booked-item">Falcon 1</p>
          <p className="booked-item">Falcon 1</p>
        </div>
        <div className="booked">
          <p className="booked-title">My Missions</p>
          <p className="booked-item">Thaicom 1</p>
          <p className="booked-item">Iridium NEXT</p>
          <p className="booked-item">Telstar</p>
        </div>
        <div className="booked">
          <p className="booked-title">My Dragons</p>
          <p className="booked-item">Dragon 1</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
