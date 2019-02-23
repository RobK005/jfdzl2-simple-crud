import React, { Component } from 'react';
import { restUrl } from './config';
class Beer extends Component {

  state = {
    beer: {
      name: '',
      description: ''
    }
  }

  componentDidMount() {
    const beerId = this.props.match.params.beerId;
    fetch(`${restUrl}/beers/${beerId}`)
    .then(response => response.json())
    .then(data => {
      this.setState({ beer: data });
    });
  }

  render() {
    const { beer } = this.state;
    return (
      <div>
        <h1>{beer.name}</h1>
        <p>{beer.description}</p>
      </div>
    );
  }
}

export default Beer;
