import BASE_URL from '../base-url';
import {
  CLEAN_QUERY,
  FINISH_SEARCH,
  RECEIVE_WINES,
  RESQUEST_WINES,
  START_SEARCH,
  UPDATE_SELECTION,
} from '../types';

const requestWines = () => ({ type: RESQUEST_WINES });
const receiveWines = (listWines) => ({
  type: RECEIVE_WINES,
  listWines,
});

export default function fetchWines() {
  const URL = `${BASE_URL}/products`;
  return async (dispatch) => {
    dispatch(requestWines());
    const response = await fetch(URL, { method: 'get' });
    const listWines = await response.json();
    return dispatch(receiveWines(listWines.items));
  };
}

export const cleanQuery = () => ({ type: CLEAN_QUERY });
export const startSearch = (query) => ({ type: START_SEARCH, query });
export const finishSearch = (results) => ({ type: FINISH_SEARCH, results });
export const updateSelection = (selection) => ({ type: UPDATE_SELECTION, selection });
