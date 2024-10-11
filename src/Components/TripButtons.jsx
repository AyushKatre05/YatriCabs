import React from 'react';
import { useDispatch } from 'react-redux';
import { setTripType } from '../redux/slices/formSlice';

const TripButtons = ({ tripType }) => {
  const dispatch = useDispatch();

  return (
    <div className="trip_option">
      <button
        onClick={() => dispatch(setTripType('oneWay'))}
        className={`button_small ${tripType === 'oneWay' ? 'active' : ''}`}
      >
        One Way
      </button>
      <button
        onClick={() => dispatch(setTripType('roundTrip'))}
        className={`button_small ${tripType === 'roundTrip' ? 'active' : ''}`}
      >
        Round Trip
      </button>
    </div>
  );
};

export default TripButtons;
