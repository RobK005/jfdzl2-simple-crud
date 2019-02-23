import React, { Component } from 'react';

const users = [{
  id: 1,
  name: 'Ala'
}, {
  id: 2,
  name: 'Bogdan'
}];

class UsersContainer extends Component {

  render() {
    return(
      <div>
        <h1>My users:</h1>
        {users.map(user => {
          return <p key={`user-${user.id}`}>{user.name}</p>
        })}
      </div>
    );
  }

}

export default UsersContainer;
