import React, { useState } from "react";

const Missions = () => {
  const [addMission, setAddMission] = useState("");
  return (
    <div className="rocket-page">
      <p className="rocket-title">Missions</p>
      <div className="mission-card">
        <div className="id-name">
          <p className="mission-id">2.</p>
          <p className="mission-name">Telstar</p>
        </div>
        <p className="mission-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          voluptatibus dolorem esse distinctio accusantium blanditiis, tempora
          exercitationem repudiandae natus dolores est? Vero veniam illum
          maiores repudiandae. Doloribus ducimus adipisci rerum.
        </p>
        <div className="buttons">
          <button className={addMission ? "not-member green" : "not-member"}>
            {addMission ? "Active Member" : "Not a member"}
          </button>
          <button
            onClick={() => setAddMission(!addMission)}
            className={addMission ? "join-mission red" : "join-mission"}
          >
            {addMission ? "Leave mission" : "Join Mission"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Missions;
