import { delay } from 'redux-saga';
import { call, put, takeLatest, apply } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {
  FETCH_ONTOLOGY,
  fetchOntologyPending,
  fetchOntologyFulfilled,
  fetchOntologyRejected,
} from 'actions';

export function* doOntologyFetch(action) {
  try {
    yield put(fetchOntologyPending());
    const url = 'https://api.jsonbin.io/b/5b44c652dd2c022ecda111ea';
    const response = yield call(fetch, url);
    if (response.ok === true) {
      const data = yield apply(response, response.json);
      yield put(fetchOntologyFulfilled(data));
    } else {
      const errorMessage = `${response.status} Error: ${response.url} ${response.statusText}`;
      yield put(fetchOntologyRejected({ errorMessage }));
    }
  } finally {
    console.log('Ontology fetch closed');
    return 'Ontology fetch closed';
  }
}

export function* ontologyFetchSaga() {
  yield takeLatest(FETCH_ONTOLOGY, doOntologyFetch);
}
