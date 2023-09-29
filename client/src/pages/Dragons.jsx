import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cancelReservation, reserveDragons, setDragons } from '../redux/slices/dragonSlice'


const Dragons = () => {

    const dispatch = useDispatch()
    const dragons = useSelector((state) => state.dragons.dragons)

    useEffect(() => {
        if(dragons.length === 0){
            fetch("https://api.spacexdata.com/v3/dragons")
              .then((response) => response.json())
              .then((data) => dispatch(setDragons(data)))
              .catch((error) => {
                console.error("Error fetching data", error);
              });
          }
    }, [dispatch]);

    const handleReservation = (id) => {
        dispatch(reserveDragons({ id }))
    }
    const handleCancelReservation = (id) => {
        dispatch(cancelReservation({ id }))
    }

    return (
        <div>
            {dragons.map((dragon) => {
                return (
                    <div key={dragon.id}>
                        <p>ID: {dragon.id}</p>
                        <p>Name: {dragon.name}</p>
                        <p>Type: {dragon.type}</p>
                        <div style={{ content: `url(${dragon.flickr_images})` }}></div>
                        <button onClick={() => handleReservation(dragon.id)}>
                            Reserve Dragon
                        </button>
                        <button onClick={() => handleCancelReservation(dragon.id)}>
                            Cancel
                        </button>
                        <p>{dragon.reserved ? "Reserved" : "Not Reserved"}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Dragons
