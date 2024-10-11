import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "../style/form.css";
import { RxCrossCircled } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import {
  setStation,
  setLocalPickupCity,
  setFromLocationOutstation,
  setToLocationOutstation,
  setFromLocationAirport,
  setToLocationAirport,
  setPickUpDate,
  setReturnDate,
  setPickUpTime,
  setTripType,
} from "../redux/slices/formSlice"; // Adjust the path if needed

export default function Form() {
  const dispatch = useDispatch();

  // Accessing Redux state
  const {
    station,
    localPickupCity,
    fromLocationOutstation,
    toLocationOutstation,
    fromLocationAirport,
    toLocationAirport,
    pickUpDate,
    returnDate,
    pickUpTime,
    tripType,
  } = useSelector((state) => state.form);

  const locations = ["Pune", "Mumbai", "Delhi", "Gondia", "Bangalore"];
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);
  const [showAirportLocationSuggestions, setShowAirportLocationSuggestions] = useState(false);
  const [showToLocationSuggestions, setShowToLocationSuggestions] = useState(false); // For TO locations in Outstation
  const [showToAirportLocationSuggestions, setShowToAirportLocationSuggestions] = useState(false); // For TRIP locations in Airport

  // Handlers for input fields
  const handleClearInput = (setter) => {
    setter("");
  };

  const handleLocationClick = () => {
    setShowLocationSuggestions(!showLocationSuggestions);
  };

  const handleAirportLocationClick = () => {
    setShowAirportLocationSuggestions(!showAirportLocationSuggestions);
  };

  const handleToLocationClick = () => {
    setShowToLocationSuggestions(!showToLocationSuggestions);
  };

  const handleToAirportLocationClick = () => {
    setShowToAirportLocationSuggestions(!showToAirportLocationSuggestions);
  };

  return (
    <div className="form">
      <div className="form_button">
        <button
          onClick={() => dispatch(setStation("outstation"))}
          className={`button ${station === "outstation" ? "active" : ""}`}
        >
          Outstation
        </button>
        <button
          onClick={() => dispatch(setStation("local"))}
          className={`button ${station === "local" ? "active" : ""}`}
        >
          Local
        </button>
        <button
          onClick={() => dispatch(setStation("airport"))}
          className={`button ${station === "airport" ? "active" : ""}`}
        >
          Airport
        </button>
      </div>

      <div>
        {station === "local" ? ( // Local Form
          <div>
            <div className="form_container">
              <div>
                <label htmlFor="">PICKUP CITY</label>
                <div className="input_container">
                  <input
                    type="text"
                    value={localPickupCity}
                    onChange={(e) => dispatch(setLocalPickupCity(e.target.value))}
                    onClick={handleLocationClick}
                  />
                  <CiLocationOn className="icon" size={18} />
                  {showLocationSuggestions && (
                    <div className="location_suggestions">
                      {locations.map((location, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            dispatch(setLocalPickupCity(location));
                            setShowLocationSuggestions(false);
                          }}
                          className="location_option"
                        >
                          {location}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="">PICKUP DATE</label>
                <div className="input_container">
                  <DatePicker
                    selected={pickUpDate}
                    onChange={(date) => dispatch(setPickUpDate(date))}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select Date"
                    className="datepicker_input"
                  />
                  <MdOutlineDateRange className="icon" size={18} />
                </div>
              </div>

              <div>
                <label htmlFor="">PICKUP TIME</label>
                <div className="input_container">
                  <TimePicker
                    value={pickUpTime}
                    onChange={(time) => dispatch(setPickUpTime(time))}
                    disableClock={true}
                    className="timepicker_input"
                  />
                  <IoMdTime className="icon" size={18} />
                </div>
              </div>
            </div>

            <div className="submit">
              <button className="button_big">EXPLORE CABS</button>
            </div>
          </div>
        ) : (
          <div>
            {station === "outstation" ? ( // Outstation Form
              <div>
                <div className="trip_option">
                  <button
                    onClick={() => dispatch(setTripType("oneWay"))}
                    className={`button_small ${tripType === "oneWay" ? "active" : ""}`}
                  >
                    One Way
                  </button>
                  <button
                    onClick={() => dispatch(setTripType("roundTrip"))}
                    className={`button_small ${tripType === "roundTrip" ? "active" : ""}`}
                  >
                    Round Trip
                  </button>
                </div>

                <div className="form_container arrow">
                  <div>
                    <label htmlFor="">FROM</label>
                    <div className="input_container">
                      <input
                        type="text"
                        value={fromLocationOutstation}
                        onChange={(e) => dispatch(setFromLocationOutstation(e.target.value))}
                        onClick={handleLocationClick}
                      />
                      <RxCrossCircled
                        className="icon"
                        size={18}
                        onClick={() => handleClearInput(() => dispatch(setFromLocationOutstation("")))}
                      />
                    </div>
                  </div>

                  <div className="arrow_container">
                    <FaArrowRight size={18} onClick={handleToLocationClick} />
                    <FaArrowLeft size={18} />
                  </div>

                  <div>
                    <label htmlFor="">TO</label>
                    <div className="input_container">
                      <input
                        type="text"
                        value={toLocationOutstation}
                        onChange={(e) => dispatch(setToLocationOutstation(e.target.value))}
                        onClick={handleToLocationClick}
                      />
                      <RxCrossCircled
                        className="icon"
                        size={18}
                        onClick={() => handleClearInput(() => dispatch(setToLocationOutstation("")))}
                      />
                      {showToLocationSuggestions && (
                        <div className="location_suggestions">
                          {locations.map((location, index) => (
                            <div
                              key={index}
                              onClick={() => {
                                dispatch(setToLocationOutstation(location));
                                setShowToLocationSuggestions(false);
                              }}
                              className="location_option"
                            >
                              {location}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form_container">
                  <div>
                    <label htmlFor="">PICKUP DATE</label>
                    <div className="input_container">
                      <DatePicker
                        selected={pickUpDate}
                        onChange={(date) => dispatch(setPickUpDate(date))}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select Date"
                        className="datepicker_input"
                      />
                      <MdOutlineDateRange className="icon" size={18} />
                    </div>
                  </div>

                  {tripType === "roundTrip" && ( // Show for round trip only
                    <div>
                      <label htmlFor="">RETURN DATE</label>
                      <div className="input_container">
                        <DatePicker
                          selected={returnDate}
                          onChange={(date) => dispatch(setReturnDate(date))}
                          dateFormat="dd/MM/yyyy"
                          placeholderText="Select Return Date"
                          className="datepicker_input"
                        />
                        <MdOutlineDateRange className="icon" size={18} />
                      </div>
                    </div>
                  )}

                  <div>
                    <label htmlFor="">PICKUP TIME</label>
                    <div className="input_container">
                      <TimePicker
                        value={pickUpTime}
                        onChange={(time) => dispatch(setPickUpTime(time))}
                        disableClock={true}
                        className="timepicker_input"
                      />
                      <IoMdTime className="icon" size={18} />
                    </div>
                  </div>
                </div>

                <div className="submit">
                  <button className="button_big">EXPLORE CABS</button>
                </div>
              </div>
            ) : ( // Airport Form
              <div>
                <div className="form_container">
                  <div>
                    <label htmlFor="">FROM</label>
                    <div className="input_container">
                      <input
                        type="text"
                        value={fromLocationAirport}
                        onChange={(e) => dispatch(setFromLocationAirport(e.target.value))}
                        onClick={handleAirportLocationClick}
                      />
                      <RxCrossCircled
                        className="icon"
                        size={18}
                        onClick={() => handleClearInput(() => dispatch(setFromLocationAirport("")))}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="">TRIP</label>
                    <div className="input_container">
                      <input
                        type="text"
                        value={toLocationAirport}
                        onChange={(e) => dispatch(setToLocationAirport(e.target.value))}
                        onClick={handleToAirportLocationClick}
                      />
                      <RxCrossCircled
                        className="icon"
                        size={18}
                        onClick={() => handleClearInput(() => dispatch(setToLocationAirport("")))}
                      />
                      {showToAirportLocationSuggestions && (
                        <div className="location_suggestions">
                          {locations.map((location, index) => (
                            <div
                              key={index}
                              onClick={() => {
                                dispatch(setToLocationAirport(location));
                                setShowToAirportLocationSuggestions(false);
                              }}
                              className="location_option"
                            >
                              {location}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form_container">
                  <div>
                    <label htmlFor="">PICKUP DATE</label>
                    <div className="input_container">
                      <DatePicker
                        selected={pickUpDate}
                        onChange={(date) => dispatch(setPickUpDate(date))}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select Date"
                        className="datepicker_input"
                      />
                      <MdOutlineDateRange className="icon" size={18} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="">PICKUP TIME</label>
                    <div className="input_container">
                      <TimePicker
                        value={pickUpTime}
                        onChange={(time) => dispatch(setPickUpTime(time))}
                        disableClock={true}
                        className="timepicker_input"
                      />
                      <IoMdTime className="icon" size={18} />
                    </div>
                  </div>
                </div>

                <div className="submit">
                  <button className="button_big">EXPLORE CABS</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
