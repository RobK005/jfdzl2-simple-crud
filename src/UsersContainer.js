import React, { Component } from 'react';

class UsersContainer extends Component {

  state = {
    beers: []
  }

  fetchUsers() {
    fetch('https://beers-bunkier.firebaseapp.com/api/v1/beers/')
    .then(response => {
      console.log(response.status);
      return response.json();
    })
    .then(data => {
      const beersArray = [];
      Object.entries(data.beers).forEach(elem => {
        const newBeer = {
          id: elem[0],
          ...elem[1]
        }
        beersArray.push(newBeer);
      });
      this.setState({ beers: beersArray });
    });
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    return(
      <div>
        <h1>My beers:</h1>
        {this.state.beers.map(beer => {
          return <p key={`beer-${beer.id}`}>{beer.name}</p>
        })}
      </div>
    );
  }

}

export default UsersContainer;
