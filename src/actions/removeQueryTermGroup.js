export const REMOVE_QUERY_TERM_GROUP = 'REMOVE_QUERY_TERM_GROUP';
export const removeQueryTermGroup = index => ({
  type: REMOVE_QUERY_TERM_GROUP,
  payload: { index },
});
