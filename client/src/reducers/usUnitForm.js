import {
  CALCULATE_US_UNITS_FORM_SUCCESS,
  CALCULATE_US_UNITS_FORM_FAILED
} from 'constants/ActionTypes';

const initialState = {
  loading: false,
  error: null,
  payload: null
};

const usUnitForm = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case CALCULATE_US_UNITS_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        payload
      }
    case CALCULATE_US_UNITS_FORM_FAILED:
      return {
        ...state,
        loading: false,
        error,
        payload: null
      }
    default:
      return state;
  }
};

export default usUnitForm;