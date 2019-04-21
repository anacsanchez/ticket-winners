import React from 'react';

const UserList = ({ entrants, winners }) => (
  <div className="user-lists">
    {
      entrants.map(user =>
        <div className="entrants" key={`user-${user.id}`}>
          Id: {user.id}, Tickets: {user.tickets}
        </div>
      )
    }
  </div>
);

export default UserList;
