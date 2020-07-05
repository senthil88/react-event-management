import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions/actions';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ filter: e.target.value }, () => {
      this.props.filter(this.state.filter);            
    });
  }

  render() {
    return (
      <div>
        <form className="Form" onSubmit={e => e.preventDefault()}>
          <input type="text" className="Form-box" placeholder="Search Events" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filter: text => dispatch(setFilter(text))
  }
}


export default connect(null, mapDispatchToProps)(SearchForm);