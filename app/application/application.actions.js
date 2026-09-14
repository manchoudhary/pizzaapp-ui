import {roots, storageKeys} from '../constants';
import {getBoolAsync, getJsonAsync} from '../lib/storage';
import {APP_START, TOGGLE_MIC} from './application.actionsTypes';

export function appInit() {
  return async dispatch => {
    const authDetails = await getJsonAsync(storageKeys.AUTH_DETAILS);
    const isAcknowledge = await getBoolAsync(storageKeys.IS_ACKNOWLEDGE);

    if (!isAcknowledge) {
      return dispatch({
        type: APP_START,
        payload: {
          root: roots.INTRODUCTION,
        },
      });
    }

    if (authDetails) {
      return dispatch({
        type: APP_START,
        payload: {
          root: roots.INSIDE,
          auth: authDetails,
        },
      });
    } else {
      return dispatch({
        type: APP_START,
        payload: {
          root: roots.OUTSIDE,
        },
      });
    }
  };
}

export const toggleMic = action => {
  return dispatch => {
    dispatch({
      type: TOGGLE_MIC,
      payload: {
        showMic: action,
      },
    });
  };
};
