import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PropTypes from "prop-types";

// Validation schema
const schema = yup.object().shape({
  date: yup.string().required("Date is required"),
  time: yup.string().required("Time is required"),
  guests: yup
    .number()
    .required("Number of guests is required")
    .min(1, "At least 1 guest is required")
    .max(10, "No more than 10 guests allowed"),
  occasion: yup.string().required("Occasion is required"),
});

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    submitForm(data);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <input
                    id="book-date"
                    type="date"
                    {...field}
                    aria-invalid={errors.date ? "true" : "false"}
                  />
                )}
              />
              {errors.date && <span role="alert">{errors.date.message}</span>}
            </div>
            <div>
              <label htmlFor="book-time">Choose Time</label>
              <Controller
                name="time"
                control={control}
                render={({ field }) => (
                  <select
                    id="book-time"
                    {...field}
                    aria-invalid={errors.time ? "true" : "false"}
                  >
                    <option value="">Select a Time</option>
                    {availableTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors.time && <span role="alert">{errors.time.message}</span>}
            </div>
            <div>
              <label htmlFor="book-guests">Number of Guests</label>
              <Controller
                name="guests"
                control={control}
                render={({ field }) => (
                  <input
                    id="book-guests"
                    type="number"
                    min="1"
                    max="10"
                    placeholder="0"
                    {...field}
                    aria-invalid={errors.guests ? "true" : "false"}
                  />
                )}
              />
              {errors.guests && <span role="alert">{errors.guests.message}</span>}
            </div>
            <div>
              <label htmlFor="book-occasion">Occasion</label>
              <Controller
                name="occasion"
                control={control}
                render={({ field }) => (
                  <select
                    id="book-occasion"
                    {...field}
                    aria-invalid={errors.occasion ? "true" : "false"}
                  >
                    <option value="">Select an Option</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                  </select>
                )}
              />
              {errors.occasion && (
                <span role="alert">{errors.occasion.message}</span>
              )}
            </div>
            <div>
              <button type="submit" aria-label="On Click">
                Make Your Reservation
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

BookingForm.propTypes = {
  availableTimes: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default BookingForm;
