import { shape, arrayOf } from 'prop-types';
import { queryTermType } from './queryTermType';
import { fetchType } from './fetchType';

export const ontologyType = {
  terms: arrayOf(shape(queryTermType)),
  ...fetchType,
};
