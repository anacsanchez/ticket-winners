import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Winners = ({ ticketsAvailable }) => {
  const [winners, setWinners] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const ticketWinners = await axios('/api', ticketsAvailable);
        // .then(res => res.json())

      setWinners(ticketWinners.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      { isLoading ?
          <div>Loading...</div> :
          winners.map((winner, i) =>
            <div key={i}>
              Id: {winner.id}, Tickets: {winner.tickets}
            </div>
          )
        }
    </div>
  );
};

export default Winners;
