import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Entrants } from './index';

const Winners = ({ ticketsAvailable }) => {
  const [winners, setWinners] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const ticketWinners = await axios.post('/api', { ticketsAvailable });

      setWinners(ticketWinners.data);
      setLoading(false);
    };
    fetchData();
  }, [ticketsAvailable]);

  return (
    <div>
      { isLoading ? <div>Loading...</div> :
      <div>Winners: <Entrants entrants={winners} /></div> }
    </div>
  );
};

export default Winners;
