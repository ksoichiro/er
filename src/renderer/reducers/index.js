import { combineReducers } from 'redux';
import { ADD_MODEL, ADD_INDEX } from '../actions'

function models(state = [], action) {
  switch (action.type) {
    case ADD_MODEL:
      return [
        ...state,
        {
          name: action.name
        }
      ];
    case ADD_INDEX:
      return [
        ...state,
        {
          name: action.name
        }
      ];
    default:
      return state;
  }
}

const erApp = combineReducers({
  models
});

export default erApp;
