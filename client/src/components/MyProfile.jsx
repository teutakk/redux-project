import React, { useState } from "react";
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
                {reservedRockets.length === 0 ? (
                  <p className="no-item">No Rocket added</p>
                ) : (
                  <div>
                    {" "}
                    {reservedRockets.map((rocket) => {
                      return (
                        <div key={rocket.id}>
                          <div className="booked-item">
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
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}{" "}
              </div>
            ) : (
              <div className="no-item">
                {reservedRockets.length === 0 ? (
                  <p>No Rocket added</p>
                ) : (
                  `Rockets added (${reservedRockets.length}) `
                )}
              </div>
            )}
          </div>
          <div className="booked">
            <p className="booked-title">My Missions</p>
            <button
              onClick={() => setShowMission(!showMission)}
              className="show"
            >
              {showMission ? "Hide Missions" : "Show Missions"}
            </button>
            {showMission ? (
              <div className="cards">
                {reservedMissions.length === 0 ? (
                  <p className="no-item">No Mission added</p>
                ) : (
                  <div>
                    {" "}
                    {reservedMissions.map((mission) => {
                      return (
                        <div key={mission.id}>
                          <div className="booked-item">
                            <p className="item-id">
                              <strong>Mission id:</strong> {mission.mission_id}
                            </p>
                            <p className="item-name">
                              {" "}
                              <strong>Mission name:</strong>{" "}
                              {mission.mission_name}
                            </p>
                            <p className="item-description">
                              {" "}
                              {mission.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}{" "}
              </div>
            ) : (
              <div className="no-item">
                {reservedMissions.length === 0 ? (
                  <p>No Mission added</p>
                ) : (
                  `Missions added (${reservedMissions.length}) `
                )}
              </div>
            )}
          </div>

          <div className="booked">
            <p className="booked-title">My Dragons</p>
            <button onClick={() => setShowDragon(!showDragon)} className="show">
              {showDragon ? "Hide Rockets" : "Show Rockets"}
            </button>
            {showDragon ? (
              <div className="cards">
                {reservedDragons.length === 0 ? (
                  <p className="no-item">No Dragon added</p>
                ) : (
                  <div>
                    {" "}
                    {reservedDragons.map((dragon) => {
                      return (
                        <div key={dragon.id}>
                          <div className="booked-item">
                            <p className="item-id">
                              <strong>Dragon id:</strong> {dragon.id}
                            </p>
                            <p className="item-name">
                              {" "}
                              <strong>Dragon name:</strong> {dragon.name}
                            </p>
                            <p className="item-description">
                              {" "}
                              {dragon.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}{" "}
              </div>
            ) : (
              <div className="no-item">
                {reservedDragons.length === 0 ? (
                  <p>No Dragon added</p>
                ) : (
                  `Dragons added (${reservedDragons.length}) `
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
