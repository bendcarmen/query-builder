import {
  ADD_QUERY_TERM,
  addQueryTerm,
} from 'actions';

describe('ADD_QUERY_TERM action', () => {

  it('addQueryTerm should dispatch a properly formatted action', () => {
    const expected = {
      type: ADD_QUERY_TERM,
      payload: { },
    };

    const actual = addQueryTerm({ });

    expect(actual).toEqual(expected);
  });
});