import BASE_URL from '../base-url';
import { RECEIVE_WINES, RESQUEST_WINES } from '../types';

const requestWines = () => ({ type: RESQUEST_WINES });
const receiveWines = (wines) => ({
  type: RECEIVE_WINES,
  wines,
});

export default function fetchHosts() {
  const URL = `${BASE_URL}/products`;
  return async (dispatch) => {
    dispatch(requestWines());
    const response = await fetch(URL, { method: 'get' });
    const wines = await response.json();
    return dispatch(receiveWines(wines));
  };
}
