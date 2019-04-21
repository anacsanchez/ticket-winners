import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UserList } from './index';

const Winners = ({ ticketsAvailable, showId, entrants }) => {
  const [winners, setWinners] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const ticketWinners = await axios.post(`/api/shows/${showId}/winners`, { ticketsAvailable });

      setWinners(ticketWinners.data);
      setLoading(false);
    };
    fetchData();
  }, [ticketsAvailable]);

  return (
    <div>
      { isLoading ? <div>Loading...</div> :
        <div>
          <div className="success-title">Winners</div> <UserList entrants={entrants} winners={winners}/>
        </div>
      }
    </div>
  );
};

export default Winners;
