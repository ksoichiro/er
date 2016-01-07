import { combineReducers } from 'redux';
import { ADD_MODEL, ADD_INDEX, SAVE_FILE } from '../actions'

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
    case SAVE_FILE:
      return [
        ...state
      ];
    default:
      return state;
  }
}

const erApp = combineReducers({
  models
});

export default erApp;
