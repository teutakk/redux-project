import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelReservation,
  reserveDragons,
  setDragons,
} from "../redux/rockets/dragonSlice";

const Dragons = () => {
  const dispatch = useDispatch();

  const dragons = useSelector((state) => state.dragons.dragons);

  useEffect(() => {
    if (dragons.length === 0) {
      fetch("https://api.spacexdata.com/v3/dragons")
        .then((response) => response.json())
        .then((data) => dispatch(setDragons(data)))
        .catch((error) => {
          console.error("Error fetching data", error);
        });
    }
  }, [dispatch, dragons.length]);

  const handleReservation = (id) => {
    dispatch(reserveDragons({ id }));
  };
  const handleCancelReservation = (id) => {
    dispatch(cancelReservation({ id }));
  };
  return (
    <div className="rocket-page">
      <p className="rocket-title">Dragons</p>
      {dragons.map((dragon) => {
        return (
          <div key={dragon.id}>
            <div className="card">
              <img
                src={dragon.flickr_images}
                alt="rocket"
                className="rocket-img"
              />
              <div className="text-wrapper">
                <p className="card-title">{dragon.name}</p>
                <p className="card-description">{dragon.type}</p>
                <div className="buttons-dragon">
                  {" "}
                  {!dragon.reserved && (
                    <button
                      className={dragon.reserved ? "book book-red" : "book"}
                      onClick={() => handleReservation(dragon.id)}
                    >
                      Reserve
                    </button>
                  )}
                  {dragon.reserved && (
                    <button
                      className={dragon.reserved ? "book book-red" : "book"}
                      onClick={() => handleCancelReservation(dragon.id)}
                    >
                      Cancel
                    </button>
                  )}
                  <p className="badge">
                    {dragon.reserved ? "Reserved" : "Not Reserved"}
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

export default Dragons;
