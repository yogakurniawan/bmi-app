import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import global from './global';
import metricUnitForm from './metricUnitForm';
import usUnitForm from './usUnitForm';

export default combineReducers({
  global,
  metricUnitForm,
  usUnitForm,
  form: formReducer
});