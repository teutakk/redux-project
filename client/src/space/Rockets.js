import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cancelReservation, reserveRockets, setRockets } from '../redux/rockets/rocketRedux'

const Rockets = () => {

    const dispatch = useDispatch()

    const rockets = useSelector((state) => state.rockets.rockets)
    const reserved = useSelector((state) => state.rockets.reserved)

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/rockets")
        .then((response) => response.json())
        .then((data) => dispatch(setRockets(data)))
        .catch((error) => {
            console.error("Error fetching data", error)
        })
    }, [dispatch])

    const handleReservation = (id) => {
        dispatch(reserveRockets({id}))
    }
    const  handleCancelReservation = (id) => {
        dispatch(cancelReservation({ id }))
    }
  return (
    <div>
        {rockets.map((rocket) => {
            return (
              <div key={rocket.id}>
                <p>{rocket.id}</p>
                <p>{rocket.name}</p>
                <p>{rocket.description}</p>
                <div style={{ content: `url(${rocket.flickr_images})` }}></div>
                <button onClick={() => handleReservation(rocket.id)}>
                  Reserve rocket
                </button>
                <button onClick={() => handleCancelReservation(rocket.id)}>
                  Cancel
                </button>
                <p>{rocket.reserved ? "Reserved" : "Not Reserved"}</p>
              </div>
            );
        })}
    </div>
  )
}

export default Rockets