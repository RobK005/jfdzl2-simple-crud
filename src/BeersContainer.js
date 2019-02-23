import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconDelete from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

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
        <Typography variant="h3" gutterBottom>
          My beers:
        </Typography>
        <Typography variant="h4" gutterBottom>
          <Link to="/create">+ Create new</Link>
        </Typography>
        <List>
        {this.state.beers.map(beer => {
          return (
            <ListItem key={`beer-${beer.id}`} button>
              <ListItemText
                primary={
                  <Link to={`/beer/${beer.id}`}>{beer.name}</Link>
                }
                secondary={
                  <Link to={`/update/${beer.id}`}>Edit</Link>
                }
               />
              <ListItemIcon>
                <IconDelete onClick={() => this.handleRemove(beer.id)} />
              </ListItemIcon>
            </ListItem>
          );
        })}
        </List>
      </div>
    );
  }

}

export default BeersContainer;
