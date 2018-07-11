export const REMOVE_QUERY_TERM = 'REMOVE_QUERY_TERM';
export const removeQueryTerm = (groupIndex, queryTermIndex) => ({
  type: REMOVE_QUERY_TERM,
  payload: { groupIndex, queryTermIndex },
});
