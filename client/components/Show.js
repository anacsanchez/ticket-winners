import React, { useState } from 'react';
import { TicketsAvailableForm, Winners } from './index';

const Show = () => {
  const [tickets, setTickets] = useState(null);

  const setTicketsAvailable = (evt) => {
    evt.preventDefault();
    setTickets(parseInt(evt.target.ticketsAvailable.value));
  };

  return (
    <div className="shows">
      <div className="show-names">A Musical People Like </div>
      <TicketsAvailableForm handleSubmit={setTicketsAvailable} />
      <div> { tickets ? <Winners ticketsAvailable={tickets} /> : null }</div>
    </div>
  );
};

export default Show;
