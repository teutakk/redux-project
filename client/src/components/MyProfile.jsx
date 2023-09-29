import React from "react";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  return (
    <div className="rocket-page">
      <p className="rocket-title">My Profile</p>
      <div className="profile-bookins">
        <div className="booked">
          <p className="booked-title">My Rockets</p>

          {rockets
            .filter((rocket) => {
              if(rocket.reserved){
                return rocket
              }
            })
            .map((rocket) => {
              return (
                <div key={rocket.id}>
                  <p className="booked-item">{rocket.id}</p>
                  <p className="booked-item">{rocket.rocket_name}</p>
                  <p className="booked-item">{rocket.description}</p>
                  ////
                </div>
              );
            })}
           
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
