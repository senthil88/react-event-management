import React, { Component } from 'react';
import Card from './Card';
import { connect } from 'react-redux';

class CardsList extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexWrap: 'wrap'}}>        
          {
          this.props.events
            .filter(event => (
              event.name.toLowerCase().includes(this.props.filter.toLowerCase())
            ))
            .map((event, index) => (
              <Card key={index} {...event} />
            ))
          }        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
    filter: state.filter
  }
};

export default connect(mapStateToProps)(CardsList);