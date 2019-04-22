import React from 'react';

const UserList = ({ entrants, winners }) => (
  <div className="user-lists">
    {
      entrants.map(entrant => {
        const isWinner = winners.length ? winners.find(user => user.id == entrant.id) : false;
        return (
          <div className={`users ${isWinner ? 'winner' : '' }`} key={`user-${entrant.id}`}>
            Email: {entrant.email}, Tickets: {entrant.tickets}
          </div>
        );
      })
    }
  </div>
);

export default UserList;
