import {
  GET_VEG_PIZZA_REQUEST,
  GET_VEG_PIZZA_SUCCESS,
  GET_VEG_PIZZA_FAILURE,
  GET_NON_VEG_PIZZA_REQUEST,
  GET_NON_VEG_PIZZA_SUCCESS,
  GET_NON_VEG_PIZZA_FAILURE,
  GET_BEVERAGES_REQUEST,
  GET_BEVERAGES_SUCCESS,
  GET_BEVERAGES_FAILURE,
  GET_TODAY_SPECIAL_REQUEST,
  GET_TODAY_SPECIAL_SUCCESS,
  GET_TODAY_SPECIAL_FAILURE,
  GET_RECOMMENDED_PIZZA_FAILURE,
  GET_RECOMMENDED_PIZZA_REQUEST,
  GET_RECOMMENDED_PIZZA_SUCCESS,
  GET_SPEECH_TO_TEXT,
  GET_SPEECH_TO_TEXT_SUCCESS,
  GET_SPEECH_TO_TEXT_FAILURE,
} from './home.actionTypes';
import {getPizza as getPizzaService} from '../../services/home.service';
import {Alert} from 'react-native';

export function getVegPizza() {
  return async dispatch => {
    dispatch({
      type: GET_VEG_PIZZA_REQUEST,
    });

    return getPizzaService({
      category: 'pizza',
      payload: {type: 'veg'},
    })
      .then(({data}) => {
        dispatch({
          type: GET_VEG_PIZZA_SUCCESS,
          payload: data,
        });

        return null;
      })
      .catch(error => {
        Alert.alert(`error ${JSON.stringify(error)}`);
        console.log(error);
        dispatch({
          type: GET_VEG_PIZZA_FAILURE,
        });

        return null;
      });
  };
}

export function getNonVegPizza() {
  return async dispatch => {
    dispatch({
      type: GET_NON_VEG_PIZZA_REQUEST,
    });

    return getPizzaService({
      category: 'pizza',
      payload: {type: 'non veg'},
    })
      .then(({data}) => {
        dispatch({
          type: GET_NON_VEG_PIZZA_SUCCESS,
          payload: data,
        });
        return null;
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: GET_NON_VEG_PIZZA_FAILURE,
        });
        return null;
      });
  };
}

export function getBeverages() {
  return async dispatch => {
    dispatch({
      type: GET_BEVERAGES_REQUEST,
    });

    return getPizzaService({
      category: 'beverages',
      payload: {},
    })
      .then(({data}) => {
        dispatch({
          type: GET_BEVERAGES_SUCCESS,
          payload: data,
        });
        return null;
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: GET_BEVERAGES_FAILURE,
        });
        return null;
      });
  };
}

export function getTodaySpecial() {
  return async dispatch => {
    dispatch({
      type: GET_TODAY_SPECIAL_REQUEST,
    });

    return getPizzaService({
      category: 'pizza',
      payload: {todaySpecial: true},
    })
      .then(({data}) => {
        dispatch({
          type: GET_TODAY_SPECIAL_SUCCESS,
          payload: data,
        });
        return null;
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: GET_TODAY_SPECIAL_FAILURE,
        });
        return null;
      });
  };
}

export function getRecommended() {
  return async dispatch => {
    dispatch({
      type: GET_RECOMMENDED_PIZZA_REQUEST,
    });

    return getPizzaService({
      category: 'pizza',
      payload: {recommended: true},
    })
      .then(({data}) => {
        dispatch({
          type: GET_RECOMMENDED_PIZZA_SUCCESS,
          payload: data,
        });
        return null;
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: GET_RECOMMENDED_PIZZA_FAILURE,
        });
        return null;
      });
  };
}
export function getSpeechToText() {
  return async dispatch => {
    dispatch({
      type: GET_SPEECH_TO_TEXT,
    });

    return getPizzaService({
      category: 'pizza',
      payload: {recommended: true},
    })
      .then(({data}) => {
        dispatch({
          type: GET_SPEECH_TO_TEXT_SUCCESS,
          payload: data,
        });
        return null;
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: GET_SPEECH_TO_TEXT_FAILURE,
        });
        return null;
      });
  };
}
