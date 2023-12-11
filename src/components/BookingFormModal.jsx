import React from 'react';

const BookingFormModal = ({ closeModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted!');
    // logic for booking submission here

    // Close the modal after submission (optional)
    closeModal();
  };

  return (
    <div className="booking-modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h1>Book Your Table</h1>

        <form className="booking-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" required />

            <label htmlFor="time">Time:</label>
            <input type="time" id="time" name="time" required />

            <label htmlFor="guests">Number of Guests:</label>
            <input type="number" id="guests" name="guests" required />

            <label htmlFor="requests">Special Requests:</label>
            <input type="text" id="requests" name="requests" />
            
            <button type="submit">Submit Booking</button>
        </form>
      </div>
    </div>
  );
};

export default BookingFormModal;
