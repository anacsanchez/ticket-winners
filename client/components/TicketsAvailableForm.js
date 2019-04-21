import React from 'react';

const TicketForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <label>Tickets Available: </label><input type="text" name="ticketsAvailable" />
    <input type="submit" />
  </form>
);

export default TicketForm;
