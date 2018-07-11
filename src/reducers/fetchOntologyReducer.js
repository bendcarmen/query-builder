import { defaultState } from 'defaultState';
import {
  FETCH_ONTOLOGY_PENDING,
  FETCH_ONTOLOGY_REJECTED,
  FETCH_ONTOLOGY_FULFILLED,
} from 'actions';

export const initialState = defaultState.ontology;

export const fetchOntologyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ONTOLOGY_PENDING: {
      return {
        isBusy: true,
        statusMessage: 'Fetching Ontology',
        hasError: false,
        terms: [...state.terms],
      };
    }
    case FETCH_ONTOLOGY_REJECTED: {
      const { errorMessage: statusMessage } = action.payload;
      return {
        isBusy: false,
        statusMessage,
        hasError: true,
        terms: [...state.terms],
      };
    }
    case FETCH_ONTOLOGY_FULFILLED: {
      return {
        isBusy: false,
        statusMessage: 'Ontology Fetch Succeeded',
        hasError: false,
        terms: [...action.payload],
      };
    }
    default: return state;
  }
};
