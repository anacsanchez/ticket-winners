import React from 'react';

const Entrants = ({ isLoading, entrants }) => (
  <div>
    {
      isLoading ? 'Loading...' : entrants.map((entrant, i) =>
      <div key={i}>
        Id: {entrant.id}, Tickets: {entrant.tickets}
      </div>
      )
    }
  </div>
);

export default Entrants;
