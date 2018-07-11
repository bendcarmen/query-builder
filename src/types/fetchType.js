import { bool, string } from 'prop-types';

export const fetchType = {
  isBusy: bool.isRequired,
  statusMessage: string.isRequired,
  hasError: bool.isRequired,
};
