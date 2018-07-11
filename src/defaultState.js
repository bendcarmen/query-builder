import uniqueId from 'lodash.uniqueid';

export const createQueryTermGroup = () => ({
  children: { },
  id: uniqueId('queryTermGroup_'),
});

export const defaultState = {
  queryBuilder: {
    canSubmit: false,
    queryTermGroups: [createQueryTermGroup()],
  },
  ontology: {
    isBusy: false,
    hasError: false,
    statusMessage: '',
    terms: [],
  },
};
