import { RECEIVE_WINES } from '../types';

const INITIAL_STATE = [];

const wines = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_WINES:
      return action.listWines;
    default:
      return state;
  }
};

export default wines;
