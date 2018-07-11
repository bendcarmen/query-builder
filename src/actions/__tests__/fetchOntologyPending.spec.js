import { FETCH_ONTOLOGY_PENDING, fetchOntologyPending } from 'actions';

describe('FETCH_ONTOLOGY_PENDING test', () => {
  it('fetchOntologyPending should dispatcha properly formatted action', () => {
    const expected = { type: FETCH_ONTOLOGY_PENDING };
    const actual = fetchOntologyPending();
    expect(actual).toEqual(expected);
  });
})