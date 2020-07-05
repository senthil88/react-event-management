import React, { Component } from 'react';
import SearchForm from './SearchForm';
import CardsList from './CardsList';

class EventList extends Component {
  render() {
    return (
      <div>
        <SearchForm />
        <CardsList />
      </div>
    );
  }
}

export default EventList;
