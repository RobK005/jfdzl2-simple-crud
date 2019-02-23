import React, { Component } from 'react';
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
          Name: <input defaultValue={this.state.name} onChange={this.handleChange} type="text" name="name" />
        </div>
        <div>
          Description: <input defaultValue={this.state.description} onChange={this.handleChange} type="text" name="description" />
        </div>
        <div>
          Image url: <input defaultValue={this.state.imageUrl} onChange={this.handleChange} type="text" name="imageUrl" />
        </div>
        <div>
          <button onClick={this.handleSubmit}>Send</button>
        </div>
      </div>
    );
  }
}

export default Form;
