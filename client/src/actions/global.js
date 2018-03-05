import { SET_CURRENT_TAB } from 'constants/ActionTypes'

export function setCurrentTab(value) {
  return {
    type: SET_CURRENT_TAB,
    payload: value
  }
}