import { FETCH_ONTOLOGY, fetchOntology } from 'actions';

describe('FETCH_ONTOLOGY action', () => {

  it('FETCH_ONTOLOGY should dispatch a properly formatted action', () => {
    const expected = { type: FETCH_ONTOLOGY };
    const actual = fetchOntology();
    expect(actual).toEqual(expected);
  });
});