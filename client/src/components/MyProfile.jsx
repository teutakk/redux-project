import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dragons = useSelector((state) => state.dragons.dragons);
  const missions = useSelector((state) => state.missions.missions);
  const [showMore, setShowMore] = useState("");
  const [showMission, setShowMission] = useState("");
  const [showDragon, setShowDragon] = useState("");

  const reservedDragons = dragons.filter((dragon) => dragon.reserved);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const reservedMissions = missions.filter((mission) => mission.reserved);

  return (
    <>
      <div className="rocket-page">
        <p className="rocket-title">My Profile</p>
        <div className="profile-bookins">
          <div className="booked">
            <p className="booked-title">My Rockets</p>
            <button onClick={() => setShowMore(!showMore)} className="show">
              {showMore ? "Hide Rockets" : "Show Rockets"}
            </button>
            {showMore ? (
              <div className="cards">
                {" "}
                {reservedRockets.map((rocket) => {
                  return (
                    <div key={rocket.id}>
                      <p className="booked-item">
                        <p className="item-id">
                          <strong>Rocket id:</strong> {rocket.id}{" "}
                        </p>
                        <p className="item-name">
                          {" "}
                          <strong>Rocket name:</strong> {rocket.rocket_name}
                        </p>
                        <p className="item-description">
                          {" "}
                          {rocket.description}
                        </p>
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="no-item">
                {reservedRockets.length === 0 ? <p>No item added</p> : ""}
              </p>
            )}
          </div>
          <div className="booked">
            <div className="booked">
              <p className="booked-title">My Missions</p>
              <button
                onClick={() => setShowMission(!showMission)}
                className="show"
              >
                {showMission ? "Hide Missions" : "Show Missions"}
              </button>
              {showMission ? (
                <div>
                  {reservedMissions.map((mission) => {
                    return (
                      <div key={mission.id}>
                        <p className="booked-item">
                          <p className="item-id">
                            {" "}
                            <strong> Mission id: </strong> {mission.mission_id}{" "}
                          </p>
                          <p className="item-name">
                            <strong> Mission name :</strong>{" "}
                            {mission.mission_name}
                          </p>
                          <p className="item-description">
                            {" "}
                            {mission.description}
                          </p>
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="no-item">
                  {reservedMissions.length === 0 ? <p>No item added</p> : ""}
                </p>
              )}
            </div>
          </div>

          <div className="booked">
            <p className="booked-title">My Dragons</p>
            <button onClick={() => setShowDragon(!showDragon)} className="show">
              {showDragon ? "Hide Dragons" : "Show Dragons"}
            </button>
            {showDragon ? (
              <div>
                {reservedDragons.map((dragon) => (
                  <div key={dragon.id}>
                    <p className="booked-item">
                      <p className="item-id">
                        {" "}
                        <strong>Dragon ID:</strong> {dragon.id}
                      </p>
                      <p className="item-name">
                        <strong>Dragon Name:</strong> {dragon.name}
                      </p>
                      <p className="item-description">
                        <strong>Dragon Type:</strong> {dragon.type}
                      </p>
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-item">
                {reservedDragons.length === 0 ? <p>No item added</p> : ""}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
