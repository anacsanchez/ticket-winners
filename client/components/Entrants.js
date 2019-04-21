import React from 'react';

const Entrants = ({ entrants }) => (
  <div className="user-lists">
    {
      entrants.map((entrant, i) =>
        <div className="entrants" key={i}>
          Id: {entrant.id}, Tickets: {entrant.tickets}
        </div>
      )
    }
  </div>
);

export default Entrants;
