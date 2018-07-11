// https://www.npmjs.com/package/redux-saga-testing
import sagaHelper from 'redux-saga-testing';
import { takeLatest, call, put, apply } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {
  ontologyFetchSaga,
  doOntologyFetch,
} from './../ontologyFetchSaga';

import {
  FETCH_ONTOLOGY,
  fetchOntologyPending,
  fetchOntologyFulfilled,
  fetchOntologyRejected,
} from 'actions';

describe('Does ontologyFetchSaga marshall the fetch ontolgy threads?', () => {
  const it = sagaHelper(ontologyFetchSaga());
  it('ontologyFetchSaga should take latest FETCH_ONTOLOGY action and call doOntologyFetch', (result) => {
    const actual = result;
    const expected = takeLatest(FETCH_ONTOLOGY, doOntologyFetch);
    expect(actual).toEqual(expected);
  });
});

describe('Does doOntology Fetch handle a successful fetch call.', () => {
  const it = sagaHelper(doOntologyFetch({ type: FETCH_ONTOLOGY }));
  it('doOntology Fetch should dispatch ONTOLOGY_FETCH_PENDING', (result) => {
    const expected = put(fetchOntologyPending());
    const actual = result;
    expect(actual).toEqual(expected);
  });
  it('doOntologyFetch should dispatch ONTOLOGY_FETCH_PENDING', (result) => {
    const expected = call(fetch, 'http://localhost:6443/query-tool/api/ontology');
    const actual = result;
    expect(actual).toEqual(expected);
    return {
      ok: true,
      json: () => '"data": "success"',
    };
  });
  it('do Ontology will yield parsed data on success', (response) => {
    expect(response).toBeTruthy();
    return { };
  });
  it('doOntologyFetch should dispatch a QUERY_FETCH_FULFILLED action', (result) => {
    const expected = put(fetchOntologyFulfilled({ ontology: { } }));
    const actual = result;
    expect(actual).toEqual(expected);
  });
  it('doOntologyFetch should close the thread on completion or takeLatest', (result) => {
    const expected = 'Ontology fetch closed';
    const actual = result;
    expect(actual).toEqual(expected);
  });
});

describe('Does doOntology Fetch handle an  unsuccessful fetch call.', () => {
  const it = sagaHelper(doOntologyFetch({ type: FETCH_ONTOLOGY }));
  it('doOntology Fetch should dispatch ONTOLOGY_FETCH_PENDING', (result) => {
    const expected = put(fetchOntologyPending());
    const actual = result;
    expect(actual).toEqual(expected);
  });
  it('doOntologyFetch should dispatch ONTOLOGY_FETCH_PENDING', (result) => {
    const expected = call(fetch, 'http://localhost:6443/query-tool/api/ontology');
    const actual = result;
    expect(actual).toEqual(expected);
    return { ok: false };
  });
  it('doOntologyFetch should dispatch a QUERY_FETCH_REJECTED action', (result) => {
    const expected = put(fetchOntologyRejected({ errorMessage: 'undefined Error: undefined undefined' }));
    const actual = result;
    expect(actual).toEqual(expected);
  });
  it('doOntologyFetch should close the thread on completion or takeLatest', (result) => {
    const expected = 'Ontology fetch closed';
    const actual = result;
    expect(actual).toEqual(expected);
  });
});
