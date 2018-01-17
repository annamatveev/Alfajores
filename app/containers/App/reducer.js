import { fromJS } from 'immutable';

import {
  LOAD_GOT_DATA_SUCCESS,
  LOAD_GOT_DATA,
  LOAD_GOT_DATA_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  data: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_GOT_DATA:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn('data', false);
    case LOAD_GOT_DATA_SUCCESS:
      return state
        .set('data', action.data)
        .set('loading', false);
    case LOAD_GOT_DATA_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
