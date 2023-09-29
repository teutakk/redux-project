import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setMissions,
  reserveMissions,
  cancelMissions,
} from "../redux/rockets/missionsSlice";

const Missions = () => {
  const dispatch = useDispatch();

  const missions = useSelector((state) => state.dragons.dragons);

  console.log(missions);

  useEffect(() => {
    if (missions.length === 0) {
      fetch("https://api.spacexdata.com/v3/missions")
        .then((response) => response.json())
        .then((data) => dispatch(setMissions(data)))
        .catch((error) => {
          console.error("Error fetching data", error);
        });
    }
  }, [dispatch, missions.length]);

  const handleReservationM = (id) => {
    dispatch(reserveMissions({ id }));
  };
  const handleCancelReservationM = (id) => {
    dispatch(cancelMissions({ id }));
  };

  return (
    <div className="rocket-page">
      <p className="rocket-title">Missions</p>
      {missions.map((mission) => {
        <div className="mission-card">
          <div className="id-name">
            <p className="mission-id">{mission.mission_id}</p>
            <p className="mission-name">{mission.mission_name}</p>
          </div>
          <p className="mission-description">{mission.description}</p>
          <div className="buttons">
            {!mission.reserved && (
              <button
                className={mission.reserved ? "not-member green" : "not-member"}
                onClick={() => handleReservationM(!mission.id)}
              >
                {mission.reserved ? "Active Member" : "Not a member"}
              </button>
            )}
            {mission.reserved && (
              <button
                onClick={() => handleCancelReservationM(mission.id)}
                className={
                  mission.reserved ? "join-mission red" : "join-mission"
                }
              >
                {mission.reserved ? "Leave mission" : "Join Mission"}
              </button>
            )}
          </div>
        </div>;
      })}
    </div>
  );
};

export default Missions;
