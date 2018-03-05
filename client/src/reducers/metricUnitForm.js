import {
  CALCULATE_METRIC_UNITS_FORM_SUCCESS,
  CALCULATE_METRIC_UNITS_FORM_FAILED
} from 'constants/ActionTypes';

const initialState = {
  loading: false,
  error: null,
  payload: null
};

const metricUnitForm = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case CALCULATE_METRIC_UNITS_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        payload
      }
    case CALCULATE_METRIC_UNITS_FORM_FAILED:
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

export default metricUnitForm;