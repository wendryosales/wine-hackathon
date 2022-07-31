import { combineReducers } from 'redux';
import search from './search-reducer';
import wines from './wines-reducer';

const rootReducer = combineReducers({
  wines,
  search,
});

export default rootReducer;
