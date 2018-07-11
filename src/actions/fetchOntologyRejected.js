export const FETCH_ONTOLOGY_REJECTED = 'FETCH_ONTOLOGY_REJECTED';

export const fetchOntologyRejected = rejectedResponse => ({
  type: FETCH_ONTOLOGY_REJECTED,
  payload: rejectedResponse,
});
