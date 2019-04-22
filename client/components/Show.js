import React, { useState } from 'react';
import { TicketsAvailableForm, UserList } from './index';
import axios from 'axios';

const Show = ({ show }) => {
  const [winners, setWinners] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const setTicketsAvailable = (evt) => {
    evt.preventDefault();
    // evt.stopPropagation();
    const fetchWinners = async () => {
      setLoading(true);
      const tickets = parseInt(evt.target.ticketsAvailable.value);
      const ticketWinners = await axios.post(`/api/shows/${show.id}/winners`, { tickets });

      setWinners(ticketWinners.data);
      setLoading(false);
    };
    fetchWinners();
  };

  return (
    <div className="shows">
      <div className="show-names">{show.name}</div>
      <div className="show-description">{show.description}</div>
      <TicketsAvailableForm handleSubmit={setTicketsAvailable} />
      { winners.length ? <div className="success-title">Winners</div> : <div className="title">Entrants</div> }
      <div>
        { isLoading ? 'Loading...' : <UserList showId={show.id} entrants={ show.entrants } winners={winners} />}
      </div>
    </div>
  );
};

export default Show;
