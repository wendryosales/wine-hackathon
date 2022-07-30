import { combineReducers } from 'redux';
import wines from './wines-reducer';

const rootReducer = combineReducers({
  wines,
});

export default rootReducer;
