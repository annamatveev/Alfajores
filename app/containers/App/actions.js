/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_GOT_DATA,
  LOAD_GOT_DATA_SUCCESS,
  LOAD_GOT_DATA_ERROR,
} from './constants';

export function loadGOTData() {
  return {
    type: LOAD_GOT_DATA,
  };
}

export function GOTDataLoaded(data) {
  return {
    type: LOAD_GOT_DATA_SUCCESS,
    data
  };
}

export function GOTDataLoadingError(error) {
  return {
    type: LOAD_GOT_DATA_ERROR,
    error,
  };
}
