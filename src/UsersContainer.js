import React, { Component } from 'react';

class UsersContainer extends Component {

  state = {
    users: [{
      id: 1,
      name: 'Ala'
    }, {
      id: 2,
      name: 'Bogdan'
    }]
  }

  fetchUsers() {
    fetch('https://randomuser.me/api/')
    .then(response => {
      console.log(response.status);
      return response.json();
    })
    .then(data => {
      this.setState({ users: data });
    });
  }

  render() {
    return(
      <div>
        <h1>My users:</h1>
        {this.state.users.map(user => {
          return <p key={`user-${user.id}`}>{user.name}</p>
        })}
      </div>
    );
  }

}

export default UsersContainer;
