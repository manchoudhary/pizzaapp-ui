import {roots} from '../constants';
import {APP_START, AUTH_VERIFIED, TOGGLE_MIC} from './application.actionsTypes';

const initialState = {
  root: roots.INSIDE,
  showMic: false,
};

export default function applicationReducer(state = initialState, action) {
  switch (action.type) {
    case APP_START:
      return {
        ...state,
        ...action.payload,
      };

    case AUTH_VERIFIED:
      return {
        ...state,
        ...action.payload,
      };

    case TOGGLE_MIC:
      console.log('toggle mic', action.payload);
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
