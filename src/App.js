import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import BeersContainer from './BeersContainer';
import Form from './Form';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={BeersContainer} />
            <Route path="/create" component={Form} />
            <Route path="/update/:beerId" component={Form} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
