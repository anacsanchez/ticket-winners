import React from 'react';

const UserList = ({ entrants, winners }) => (
  <div className="user-lists">
    {
      entrants.map(entrant => {
        const isWinner = winners.find(user => user.id == entrant.id)
        return (
          <div className={`users ${isWinner ? 'winner' : null }`} key={`user-${entrant.id}`}>
            Email: {entrant.email}, Tickets: {entrant.tickets}
          </div>
        );
      })
    }
  </div>
);

export default UserList;
