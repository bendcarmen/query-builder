import { fetchOntologyReducer, initialState } from './../fetchOntologyReducer';

describe('fetchOntologyReducer tests', () => {

  it('fetchOntologyReducer should return a default state for unhandled action', () => {
    const action = { type: 'UNKNOWN_ACTION_TYPE' };
    const expected = initialState;
    const actual = fetchOntologyReducer(undefined, action);
    expect(actual).toEqual(expected);
  });

  it('fetchOntologyReducer should have the correct state for FETCH_ONTOLOGY_PENDING', () => {
    const expected = {
      ...initialState,
      isBusy: true,
      statusMessage: 'Fetching Ontology',
      hasError: false,
    };
    const actual = fetchOntologyReducer(initialState, { type: 'FETCH_ONTOLOGY_PENDING' });
    expect(actual).toEqual(expected);
  });

  it('fetchOntologyReducer should have the correct state for FETCH_ONTOLOGY_REJECTED', () => {
    const expected = {
      ...initialState,
      isBusy: false,
      statusMessage: 'Fetch Ontology Rejected',
      hasError: true,
    };
    const actual = fetchOntologyReducer(initialState, { type: 'FETCH_ONTOLOGY_REJECTED', payload: { errorMessage: 'Fetch Ontology Rejected' } });
    expect(actual).toEqual(expected);
  });
  it('fetchOntologyReducer should have the correct state for FETCH_ONTOLOGY_FULFILLED', () => {
    const expected = {
      ...initialState,
      isBusy: false,
      statusMessage: 'Ontology Fetch Succeeded',
      hasError: false,
    };
    const actual = fetchOntologyReducer(initialState, { type: 'FETCH_ONTOLOGY_FULFILLED', payload: { ontology: {} } });
    expect(actual).toEqual(expected);
  });


});