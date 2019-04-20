import React, { useState, useEffect } from 'react';

const Entrants = () => {
  const [entrantsData, setEntrantsData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const data = await fetch('/api')
        .then(res => res.json())
        .then(resData => resData);

      setEntrantsData(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      { isLoading ?
          <div>Loading...</div> :
          entrantsData.map((entrant, i) =>
            <div key={i}>
              Id: {entrant.id}, Tickets: {entrant.tickets}
            </div>
          )
        }
      }
    </div>
  );
};

export default Entrants;
