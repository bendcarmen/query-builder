import { queryBuilderReducer, initialState } from './../queryBuilderReducer';

describe('queryBuilderReducer tests', () => {
  it('queryBuilderReducer should yield the initial state by default', () => {
    const expected = initialState;
    const actual = queryBuilderReducer(undefined, { type: 'DOES_NOT_EXIST' });
    expect(actual).toEqual(expected);
  });

  it('queryBuilderReducer should set canSubmit to false when a QueryTermGroup is added', () => {
    const expected = { ...initialState, canSubmit: false };
    const actual = queryBuilderReducer(initialState, { type: 'ADD_QUERY_TERM_GROUP' });
    expect(actual).toEqual(expected);
  });

  it('queryBuilderReducer should set canSubmit to true when a QueryTerm is added', () => {
    const expected = { ...initialState, canSubmit: true };
    const actual = queryBuilderReducer(initialState, { type: 'ADD_QUERY_TERM' });
    expect(actual).toEqual(expected);
  });
});
