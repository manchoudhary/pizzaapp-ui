import {
  FETCH_TOPPINGS_REQUEST,
  FETCH_TOPPINGS_SUCCESS,
  FETCH_TOPPINGS_FAILURE,
} from './productDetails.actionTypes';
import {getToppings as getToppingsService} from '../../services/home.service';

export function fetchToppings() {
  return async dispatch => {
    dispatch({
      type: FETCH_TOPPINGS_REQUEST,
    });

    getToppingsService({
      payload: {page: 0, size: 10},
    })
      .then(data => {
        dispatch({
          type: FETCH_TOPPINGS_SUCCESS,
          payload: {
            vegToppings: data.filter(item => item.type === 'Veg'),
            nonVegToppings: data.filter(item => item.type === 'Non Veg'),
          },
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: FETCH_TOPPINGS_FAILURE,
        });
      });
  };
}
