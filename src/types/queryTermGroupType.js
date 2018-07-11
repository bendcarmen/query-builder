import { object, string } from 'prop-types';
import { queryTermType } from './queryTermType';
import { ObjectUnsubscribedError } from 'rxjs';

export const queryTermGroup = {
  children: object.isRequired, // TODO use Map instead of Object...Map.of()
  id: string.isRequired,
};

