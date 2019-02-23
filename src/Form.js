import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { restUrl } from './config';
class Form extends Component {

  state = {
    name: '',
    description: '',
    imageUrl: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = () => {
    // Create:
    // POST https://beers-api-sa.firebaseapp.com/api/v1/beers
    // data: this.state

    // Update:
    // POST https://beers-api-isa.firebaseapp.com/api/v1/beers/:beerId
    // data: this.state

    const beerId = this.props.match.params.beerId;
    if (beerId) {
      fetch(`${restUrl}/beers/${beerId}`, {
        method: 'PATCH',
        body: JSON.stringify(this.state)
      });
    } else {
      fetch(`${restUrl}/beers`, {
        method: 'POST',
        body: JSON.stringify(this.state)
      });
    }
  }

  componentDidMount() {
    const beerId = this.props.match.params.beerId;
    if (beerId) {
      fetch(`${restUrl}/beers/${beerId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name,
          description: data.description,
          imageUrl: data.imageUrl
        });
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <TextField
            label="Name"
            defaultValue={this.state.name}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            fullWidth
            name="name" />
        </div>
        <div>
          <TextField
            label="description"
            defaultValue={this.state.description}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            fullWidth
            name="description" />
        </div>
        <div>
          <TextField
            label="Image URL"
            defaultValue={this.state.imageUrl}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            fullWidth
            name="imageUrl" />
        </div>
        <div>
          <Button onClick={this.handleSubmit} variant="contained" color="primary">
            Send
          </Button>
        </div>
      </div>
    );
  }
}

export default Form;
