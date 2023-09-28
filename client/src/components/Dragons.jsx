import { useState } from "react";
import rocket from "./../assets/a.png.webp";

const Dragons = () => {
  const [showDragons, setShowDragons] = useState("");
  return (
    <div>
      <div className="rocket-page">
        <p className="rocket-title">SpaceX Dragons</p>
        <div className="card">
          <img src={rocket} alt="rocket" className="rocket-img" />
          <div className="text-wrapper">
            <p className="card-title">lorem impsum</p>
            <p className="card-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              rem itaque deleniti cumque ipsam veritatis sapiente illo quidem
              deserunt ea dolore cupiditate voluptas labore quia est, nostrum
              facilis officiis esse.
            </p>
            <button
              onClick={() => setShowDragons(!showDragons)}
              className={showDragons ? "book book-red" : "book"}
            >
              {showDragons ? "Cancel Reservation" : "Reserve a Dragon"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dragons;
