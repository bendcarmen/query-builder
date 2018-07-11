import { bool, shape, arrayOf } from 'prop-types';
import { queryTermGroupType } from './queryTermGroupType';
import { ontologyType } from './ontologyType';

export const queryBuilderType = {
  canSubmit: bool.isRequired,
  queryTermGroups: arrayOf(shape(queryTermGroupType)).isRequired,
  ontology: shape(ontologyType).isRequired,
};
