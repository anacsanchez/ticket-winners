import React, { useState } from 'react';
import { TicketsAvailableForm, Winners } from './index';

const Show = ({ show }) => {
  const [tickets, setTickets] = useState(null);

  const setTicketsAvailable = (evt) => {
    evt.preventDefault();
    setTickets(parseInt(evt.target.ticketsAvailable.value));
  };

  return (
    <div className="shows">
      <div className="show-names">{show.name}</div>
      <div className="show-description">{show.description}</div>
      <TicketsAvailableForm handleSubmit={setTicketsAvailable} />
      <div> { tickets ? <Winners showId={show.id} ticketsAvailable={tickets} entrants={show.entrants } /> : null }</div>
    </div>
  );
};

export default Show;
