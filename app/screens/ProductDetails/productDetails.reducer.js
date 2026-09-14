import {
  FETCH_TOPPINGS_REQUEST,
  FETCH_TOPPINGS_FAILURE,
  FETCH_TOPPINGS_SUCCESS,
} from './productDetails.actionTypes';

const initialState = {
  toppings: {
    loading: true,
    items: [],
  },
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TOPPINGS_REQUEST:
      return {
        ...state,
        toppings: {
          loading: true,
          items: [],
        },
      };

    case FETCH_TOPPINGS_SUCCESS:
      return {
        ...state,
        toppings: {
          loading: false,
          items: action.payload,
        },
      };

    case FETCH_TOPPINGS_FAILURE:
      return {
        ...state,
        toppings: {
          loading: false,
          items: [],
        },
      };
    default:
      return state;
  }
}
