import BASE_URL from '../base-url';
import { RECEIVE_WINES, RESQUEST_WINES } from '../types';

const requestWines = () => ({ type: RESQUEST_WINES });
const receiveWines = (listWines) => ({
  type: RECEIVE_WINES,
  listWines,
});

export default function fetchHosts() {
  const URL = `${BASE_URL}/products`;
  return async (dispatch) => {
    dispatch(requestWines());
    const response = await fetch(URL, { method: 'get' });
    const listWines = await response.json();
    return dispatch(receiveWines(listWines.items));
  };
}
