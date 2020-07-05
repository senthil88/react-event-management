import React, { Component } from 'react';
import './App.css';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={EventList} />
            <Route path="/events/:id" component={EventForm} />
          </Switch>
        </div>        
      </Router>
    );
  }
}

export default App;
