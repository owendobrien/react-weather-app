import React, { Component } from 'react';
import Navbar from './Navbar';
import DayContainer from './DayContainer';
import WeekContainer from './WeekContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

  class App extends Component {
    render() {
      return (
        <Router>
          <div className="app">
            <Navbar />
            <div className="content">
              <Switch>
                <Route exact path="/">
                  <DayContainer />
                </Route>
                <Route path="/weekcontainer">
                  <WeekContainer />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      );
    }
  }
export default App;
