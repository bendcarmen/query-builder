import { FETCH_ONTOLOGY_REJECTED, fetchOntologyRejected } from 'actions';

describe('FETCH_ONTOLOGY_REJECTED', () => {
  it('fetchOntologyRejected should dispatch a properly formatted action', () => {
    const expected = { type: FETCH_ONTOLOGY_REJECTED, payload: { } };
    const actual = fetchOntologyRejected({ });
    expect(actual).toEqual(expected);
  });
});