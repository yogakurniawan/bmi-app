import axios from 'axios'
import { CALCULATE_US_UNITS_FORM, CALCULATE_METRIC_UNITS_FORM } from 'constants/ActionTypes';

const BMI_API = 'http://localhost:5000/api/bmi'

export function calculateMetricUnits(data) {
  const payload = {
    unit: 1,
    mass: data.weight,
    height: data.height / 100
  }
  return {
    type: CALCULATE_METRIC_UNITS_FORM,
    promise: axios.post(BMI_API, payload).then(response => response.data)
  };
}

export function calculateUsUnits(data) {
  const payload = {
    unit: 2,
    mass: data.weight,
    height: (data.feet * 12) + data.inches
  }
  return {
    type: CALCULATE_US_UNITS_FORM,
    promise: axios.post(BMI_API, payload).then(response => response.data)
  };
}