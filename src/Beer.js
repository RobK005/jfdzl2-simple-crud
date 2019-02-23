import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

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
        <Typography variant="h4" gutterBottom>
          {beer.name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {beer.description}
        </Typography>
        <div>
          <Link to="/">Back to list</Link>
        </div>
      </div>
    );
  }
}

export default Beer;
