import { defaultState, createQueryTermGroup } from 'defaultState';
import {
  ADD_QUERY_TERM_GROUP,
  ADD_QUERY_TERM,
  REMOVE_QUERY_TERM,
} from 'actions';

export const initialState = defaultState.queryBuilder;
export const queryBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUERY_TERM_GROUP: {
      return {
        ...state,
        canSubmit: false,
        queryTermGroups: [...state.queryTermGroups, createQueryTermGroup()],
      };
    }
    case ADD_QUERY_TERM: {
      const lastGroupIndex = state.queryTermGroups.length - 1;
      const lastGroup = state.queryTermGroups[lastGroupIndex];
      const queryTermGroups = state.queryTermGroups.slice(0, lastGroupIndex);
      const queryTermGroup = {
        ...lastGroup,
        children: { ...lastGroup.children, [action.payload.id]: action.payload },
      };
      return {
        ...state,
        canSubmit: true,
        queryTermGroups: [...queryTermGroups, queryTermGroup],
      };
    }
    case REMOVE_QUERY_TERM: {
      const { groupIndex, queryTermIndex } = action.payload;
      const preGroups = state.queryTermGroups.slice(0, groupIndex);
      const postGroups = state.queryTermGroups.slice(groupIndex + 1);
      const editedGroup = { ...state.queryTermGroups[groupIndex] };
      const groupChildren = Object.values(editedGroup.children);
      if (groupChildren.length > 1) {
        const children = groupChildren.filter((child, index) => index !== queryTermIndex);
        const group = { ...editedGroup, children };
        return {
          ...state,
          queryTermGroups: [...preGroups, group, ...postGroups],
        };
      } else if (state.queryTermGroups.length > 1) {
        return {
          ...state,
          canSubmit: true,
          queryTermGroups: [...preGroups, ...postGroups],
        };
      }
      return {
        ...state,
        ...{
          canSubmit: false,
          queryTermGroups: [createQueryTermGroup()],
        },
      };
    }
    default: return state;
  }
};
