import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  station: "",
  localPickupCity: "",
  fromLocationOutstation: "",
  toLocationOutstation: "",
  fromLocationAirport: "",
  toLocationAirport: "",
  pickUpDate: null,
  returnDate: null, // Define returnDate here
  pickUpTime: "",
  tripType: "oneWay", // Default trip type
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setStation: (state, action) => {
      state.station = action.payload;
    },
    setLocalPickupCity: (state, action) => {
      state.localPickupCity = action.payload;
    },
    setFromLocationOutstation: (state, action) => {
      state.fromLocationOutstation = action.payload;
    },
    setToLocationOutstation: (state, action) => {
      state.toLocationOutstation = action.payload;
    },
    setFromLocationAirport: (state, action) => {
      state.fromLocationAirport = action.payload;
    },
    setToLocationAirport: (state, action) => {
      state.toLocationAirport = action.payload;
    },
    setPickUpDate: (state, action) => {
      state.pickUpDate = action.payload;
    },
    setReturnDate: (state, action) => { // Define this reducer
      state.returnDate = action.payload;
    },
    setPickUpTime: (state, action) => {
      state.pickUpTime = action.payload;
    },
    setTripType: (state, action) => {
      state.tripType = action.payload;
    },
  },
});

// Export actions
export const {
  setStation,
  setLocalPickupCity,
  setFromLocationOutstation,
  setToLocationOutstation,
  setFromLocationAirport,
  setToLocationAirport,
  setPickUpDate,
  setReturnDate, // Make sure this is exported
  setPickUpTime,
  setTripType,
} = formSlice.actions;

// Export reducer
export default formSlice.reducer;
