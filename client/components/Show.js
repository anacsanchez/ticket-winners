import React, { useState } from 'react';
import { TicketsAvailableForm, Winners } from './index';

const Show = () => {
  const [tickets, setTickets] = useState(null);

  const setTicketsAvailable = (evt) => {
    evt.preventDefault();
    setTickets(parseInt(10, evt.target.ticketsAvailable.value));
  };

  return (
    <div>
      <span>A Musical People Like </span>
      <TicketsAvailableForm handleSubmit={setTicketsAvailable} />
      <div> { tickets ? <Winners ticketsAvailable={tickets} /> : null }</div>
    </div>
  );
};

export default Show;
