import React, { useReducer, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";
import Header from "./Header";

const Main = () => {
  const initialState = {
    availableTimes: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return { availableTimes: fetchAPI(new Date(action.payload)) };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "UPDATE_TIMES", payload: new Date() });
  }, []);

  const fetchAPI = (date) => {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  //Chrome was blocking running the script on the index page so I added it here. "https://chromestatus.com/feature/5629709824032768"
  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const navigate = useNavigate();
  const submitAPI = (formData) => {
    return true;
  };

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={state.availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
