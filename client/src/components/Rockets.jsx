import { useEffect, useState } from "react";
import rocket from "./../assets/a.png.webp";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelReservation,
  reserveRockets,
  setRockets,
} from "../redux/rockets/rocketRedux";

const Rockets = () => {
  const dispatch = useDispatch();

  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/rockets")
      .then((response) => response.json())
      .then((data) => dispatch(setRockets(data)))
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, [dispatch]);

  const handleReservation = (id) => {
    dispatch(reserveRockets({ id }));
  };
  const handleCancelReservation = (id) => {
    dispatch(cancelReservation({ id }));
  };
  return (
    <div className="rocket-page">
      <p className="rocket-title">Rockets</p>
      {rockets.map((rocket) => {
        return (
          <div>
            <div className="card">
              <img
                src={rocket.flickr_images}
                alt="rocket"
                className="rocket-img"
              />
              <div className="text-wrapper">
                <p className="card-title">
                  {rocket.rocket_name}
                  {/* <span className={"reserved"}>
                      {showReserved ? "Reserved" : ""}{" "}
                      </span> */}
                </p>
                <p className="card-description">
                {rocket.description}
                </p>
                {/* <button
                  onClick={() => handleReservation(rocket.id)}
                  // className={showReserved ? "book book-red" : "book"}
                >
                  {" "}
                  Reserve
                  {/* {showReserved ? "Cancel Reservation" : "Book Rocket"} */}
                {/* </button>  */}

                <button onClick={() => handleReservation(rocket.id)}>
                  Reserve rocket
                </button>
                <button onClick={() => handleCancelReservation(rocket.id)}>
                  Cancel
                </button>
                <p>{rocket.reserved ? "Reserved" : "Not Reserved"}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Rockets;
