import React, { Component } from 'react';

class Form extends Component {

  state = {
    name: '',
    description: '',
    imageUrl: ''
  }

  handleChangeName = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <div>
          Name: <input onChange={this.handleChange} type="text" />
        </div>
        <div>
          Description: <input onChange={this.handleChange} type="text"  />
        </div>
        <div>
          Image url: <input onChange={this.handleChange} type="text"  />
        </div>
        <div>
          <button>Send</button>
        </div>
      </div>
    );
  }
}

export default Form;
