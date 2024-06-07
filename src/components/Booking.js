import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import BookingForm from './BookingForm';

const Booking = ({ availableTimes, dispatch, submitForm }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFormSubmit = useCallback(async (formData) => {
    setLoading(true);
    setError(null);

    try {
      await submitForm(formData);
    } catch (err) {
      setError('Failed to submit the form. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [submitForm]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={handleFormSubmit}
      />
    </div>
  );
};

Booking.propTypes = {
  availableTimes: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default React.memo(Booking);
