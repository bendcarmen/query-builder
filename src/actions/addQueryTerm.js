export const ADD_QUERY_TERM = 'ADD_QUERY_TERM';

export const addQueryTerm = queryTerm => ({
  type: ADD_QUERY_TERM,
  payload: queryTerm,
});
