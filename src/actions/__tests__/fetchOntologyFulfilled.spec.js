import { FETCH_ONTOLOGY_FULFILLED, fetchOntologyFulfilled } from 'actions';

describe('FETCH_ONTOLOGY_FULFILLED action tests', () => {

  it('fetchOntologyFulfilled should dispatch a properly formatted action', () => {
    const expected = { type: FETCH_ONTOLOGY_FULFILLED, payload: { } };
    const actual = fetchOntologyFulfilled({ });
    expect(actual).toEqual(expected);
  });
});
