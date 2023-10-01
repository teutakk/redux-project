import { useEffect } from "react";
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
    if (rockets.length === 0) {
      fetch("https://api.spacexdata.com/v3/rockets")
        .then((response) => response.json())
        .then((data) => dispatch(setRockets(data)))
        .catch((error) => {
          console.error("Error fetching data", error);
        });
    }
  }, [dispatch, rockets.length]);

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
          <div key={rocket.id}>
            <div className="card">
              <img
                src={rocket.flickr_images}
                alt="rocket"
                className="rocket-img"
              />
              <div className="text-wrapper">
                <p className="card-title">{rocket.rocket_name}</p>
                <p className="card-description">{rocket.description}</p>
                <div className="buttons-rocket">
                  {" "}
                  {!rocket.reserved && (
                    <button
                      className={rocket.reserved ? "book book-red" : "book"}
                      onClick={() => handleReservation(rocket.id)}
                    >
                      Reserve
                    </button>
                  )}
                  {rocket.reserved && (
                    <button
                      className={rocket.reserved ? "book book-red" : "book"}
                      onClick={() => handleCancelReservation(rocket.id)}
                    >
                      Cancel
                    </button>
                  )}
                  <p className="badge">
                    {rocket.reserved ? "Reserved" : "Not Reserved"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Rockets;
