
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_GOT_DATA } from 'containers/App/constants';
import { GOTDataLoaded, GOTDataLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';

export function* getRepos() {
  const requestURL = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';

  try {
    const data = yield call(request, requestURL);
    yield put(GOTDataLoaded(data));
  } catch (err) {
    yield put(GOTDataLoadingError(err));
  }
}

export default function* loadGOTData() {
  yield takeLatest(LOAD_GOT_DATA, getRepos);
}
