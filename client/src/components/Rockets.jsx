import { useState } from "react";
import rocket from "./../assets/a.png.webp";

const Rockets = () => {
  const [showReserved, setShowReserved] = useState("");
  return (
    <div className="rocket-page">
      <p className="rocket-title">Rockets</p>
      <div className="card">
        <img src={rocket} alt="rocket" className="rocket-img" />
        <div className="text-wrapper">
          <p className="card-title">
            lorem impsum{" "}
            <span className={"reserved"}>
              {showReserved ? "Reserved" : ""}{" "}
            </span>
          </p>
          <p className="card-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum rem
            itaque deleniti cumque ipsam veritatis sapiente illo quidem deserunt
            ea dolore cupiditate voluptas labore quia est, nostrum facilis
            officiis esse.
          </p>
          <button
            onClick={() => setShowReserved(!showReserved)}
            className={showReserved ? "book book-red" : "book"}
          >
            {showReserved ? "Cancel Reservation" : "Book Rocket"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rockets;
