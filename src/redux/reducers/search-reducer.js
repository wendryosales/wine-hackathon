import {
  CLEAN_QUERY,
  FINISH_SEARCH,
  START_SEARCH,
  UPDATE_SELECTION,
} from '../types';

const initialState = {
  loading: false,
  results: [],
  query: '',
};

function search(state, action) {
  switch (action.type) {
    case CLEAN_QUERY:
      return initialState;
    case START_SEARCH:
      return { ...state, loading: true, query: action.query };
    case FINISH_SEARCH:
      return { ...state, loading: false, results: action.results };
    case UPDATE_SELECTION:
      return { ...state, query: action.selection };
    default:
      return initialState;
  }
}

export default search;
