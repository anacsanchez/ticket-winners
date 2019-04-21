import React, { useState } from 'react';
import { TicketsAvailableForm } from './index';
import Winners from './Winners';

const Show = () => {
  // const [winners, setWinners] = useState([]);
  // const [isLoading, setLoading] = useState(false);
  // const [showWinners, setShowWinners] = useState(false)
  const [tickets, setTickets] = useState(null);

  const setTicketsAvailable = (evt) => {
    evt.preventDefault();
    setTickets(parseInt(10, evt.target.ticketsAvailable.value));
  };
  // const findWinners = (evt) => {
    // evt.preventDefault();
    // setShowWinners(true)
  //   const { value } = evt.target.ticketsAvailable;
  //   const fetchData = async () => {
  //     setLoading(true);

  //     const data = await fetch('/api', value)
  //       .then(res => res.json())

  //     setWinners(data);
  //     setLoading(false);
  //   };
  //   fetchData();
  // };
  // const [showWinners, setShowWinners] = useState(false);
  return (
    <div>
      <span>A Musical People Like </span>
      <TicketsAvailableForm handleSubmit={setTicketsAvailable} />
      <div> { tickets ? <Winners ticketsAvailable={tickets} /> : null }</div>
    </div>
  );
};

export default Show;
