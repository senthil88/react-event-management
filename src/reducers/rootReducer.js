import { SET_FILTER } from '../actions/actions';
import data from '../data/data.json'

const initialState = {
  events: data,
  filter: '' 
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {...state, filter: action.text};
    case "TEST_ACTION":
      console.log('wuuuut');
      return state;
    default:
      return state;
  }
}

export default rootReducer;


