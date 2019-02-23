import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { restUrl } from './config';
class BeersContainer extends Component {

  state = {
    beers: []
  }

  removeBeer = (beerId) => {
    const url = `${restUrl}/beers/${beerId}`;
    fetch(url, {
      method: 'DELETE'
    })
    .then(response => {
      this.fetchBeers();
    });
  }

  handleRemove = (beerId) => {
    this.removeBeer(beerId);
  }

  fetchBeers() {
    fetch(`${restUrl}/beers/`)
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
    this.fetchBeers();
  }

  render() {
    return(
      <div>
        <h1>My beers:</h1>
        <h2><Link to="/create">+ Create new</Link></h2>
        {this.state.beers.map(beer => {
          return (
            <p key={`beer-${beer.id}`}>
              <Link to={`/beer/${beer.id}`}>{beer.name}</Link>
              <Link to={`/update/${beer.id}`}><button>Edit</button></Link>
              <button onClick={() => this.handleRemove(beer.id)}>Remove</button>
            </p>
          );
        })}
      </div>
    );
  }

}

export default BeersContainer;
