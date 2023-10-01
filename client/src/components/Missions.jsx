import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setMissions,
  reserveMissions,
  cancelMissions,
} from "../redux/rockets/missionsSlice";

const Missions = () => {
  const dispatch = useDispatch();

  const missions = useSelector((state) => state.missions.missions);

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
        return (
          <div className="mission-card" key={mission.mission_id}>
            <div className="id-name">
              <p className="mission-id">{mission.mission_id}</p>
              <p className="mission-name">{mission.mission_name}</p>
            </div>
            <p className="mission-description">{mission.description}</p>

            <div className="buttons">
              {mission.reserved ? (
                <button className="join-mission green">Active Member</button>
              ) : (
                <button className="join-mission">Not A Member</button>
              )}
              {!mission.reserved ? (
                <button
                  className={mission.reserved ? "" : "join-mission "}
                  onClick={() => handleReservationM(mission.mission_id)}
                >
                  Join Mission
                </button>
              ) : (
                <button
                  onClick={() => handleCancelReservationM(mission.mission_id)}
                  className={mission.reserved ? "join-mission red" : ""}
                >
                  Leave mission
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Missions;
