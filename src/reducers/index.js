import { INCREMENT, DECREMENT, RANDOM_NUMBER } from '../actions';
import { combineReducers } from 'redux';

const initialState = {
    number: 0,
};

const counter = (state = initialState, action) => {
    switch(action.type) {
      case RANDOM_NUMBER:
        return {
          ...state,
          number: Math.floor(Math.random() * 10),
        }
      case INCREMENT:
        return {
          ...state,
          number: state.number + 1,
        }
      case DECREMENT:
       return {
          ...state,
          number: state.number - 1,
       }
      default:
        return state;
    }
}

const counterApp = combineReducers({
    counter
});

export default counterApp;