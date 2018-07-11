import { ADD_QUERY_TERM_GROUP, addQueryTermGroup } from 'actions';

describe('ADD_QUERY_TERM_GROUP action', () => {
  it('addQueryTermGroup should dispatch a properly formatted action ', () => {
    const expected = { 
      type: ADD_QUERY_TERM_GROUP,
      payload: { },
    }

    const actual = addQueryTermGroup({ });

    expect(actual).toEqual(expected);
  });
});