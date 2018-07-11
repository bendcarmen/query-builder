export const FETCH_ONTOLOGY_FULFILLED = 'FETCH_ONTOLOGY_FULFILLED';

export const fetchOntologyFulfilled = result => ({
  type: FETCH_ONTOLOGY_FULFILLED,
  payload: result,
});
