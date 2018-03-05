import {
  SET_CURRENT_TAB
} from 'constants/ActionTypes';

const initialState = {
  currentTab: 'usUnit'
};

const global = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_TAB:
      return {
        ...state,
        currentTab: payload
      }
    default:
      return state;
  }
};

export default global;