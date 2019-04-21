import React from 'react';

const TicketForm = ({ handleSubmit }) => (
  <form className="small-forms" onSubmit={handleSubmit}>
    <div><label>Tickets Available: </label><input type="text" name="ticketsAvailable" size="3" required /></div>
    <input type="submit" value="Submit" className="input-submit-buttons"/>
  </form>
);

export default TicketForm;
