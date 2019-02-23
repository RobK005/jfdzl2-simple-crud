import React, { Component } from 'react';
import UsersContainer from './UsersContainer';
import Form from './Form';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <UsersContainer />
      </div>
    );
  }
}

export default App;
