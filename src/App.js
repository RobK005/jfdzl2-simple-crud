import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import BeersContainer from './BeersContainer';
import Beer from './Beer';
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
            <Route path="/beer/:beerId" component={Beer} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
