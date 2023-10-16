import {
  GET_VEG_PIZZA_REQUEST,
  GET_VEG_PIZZA_FAILURE,
  GET_VEG_PIZZA_SUCCESS,
  GET_NON_VEG_PIZZA_REQUEST,
  GET_NON_VEG_PIZZA_FAILURE,
  GET_NON_VEG_PIZZA_SUCCESS,
  GET_BEVERAGES_REQUEST,
  GET_BEVERAGES_FAILURE,
  GET_BEVERAGES_SUCCESS,
  GET_TODAY_SPECIAL_REQUEST,
  GET_TODAY_SPECIAL_SUCCESS,
  GET_TODAY_SPECIAL_FAILURE,
  GET_RECOMMENDED_PIZZA_REQUEST,
  GET_RECOMMENDED_PIZZA_SUCCESS,
  GET_RECOMMENDED_PIZZA_FAILURE,
} from './home.actionTypes';

const initialState = {
  vegPizza: {
    loading: true,
    items: [],
  },
  nonVegPizza: {
    loading: true,
    items: [],
  },
  beverages: {
    loading: true,
    items: [],
  },
  todaySpecial: {
    loading: true,
    items: [],
  },
  recommended: {
    loading: true,
    items: [],
  },
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VEG_PIZZA_REQUEST:
      return {
        ...state,
        vegPizza: {
          loading: true,
          items: [],
        },
      };

    case GET_VEG_PIZZA_SUCCESS:
      return {
        ...state,
        vegPizza: {
          loading: false,
          items: action.payload,
        },
      };

    case GET_VEG_PIZZA_FAILURE:
      return {
        ...state,
        vegPizza: {
          loading: false,
          items: [],
        },
      };

    case GET_NON_VEG_PIZZA_REQUEST:
      return {
        ...state,
        nonVegPizza: {
          loading: true,
          items: [],
        },
      };

    case GET_NON_VEG_PIZZA_SUCCESS:
      return {
        ...state,
        nonVegPizza: {
          loading: false,
          items: action.payload,
        },
      };

    case GET_NON_VEG_PIZZA_FAILURE:
      return {
        ...state,
        nonVegPizza: {
          loading: false,
          items: [],
        },
      };

    case GET_BEVERAGES_REQUEST:
      return {
        ...state,
        beverages: {
          loading: true,
          items: [],
        },
      };

    case GET_BEVERAGES_SUCCESS:
      return {
        ...state,
        beverages: {
          loading: false,
          items: action.payload,
        },
      };

    case GET_BEVERAGES_FAILURE:
      return {
        ...state,
        beverages: {
          loading: false,
          items: [],
        },
      };

    case GET_TODAY_SPECIAL_REQUEST:
      return {
        ...state,
        todaySpecial: {
          loading: true,
          items: [],
        },
      };

    case GET_TODAY_SPECIAL_SUCCESS:
      return {
        ...state,
        todaySpecial: {
          loading: false,
          items: action.payload,
        },
      };

    case GET_TODAY_SPECIAL_FAILURE:
      return {
        ...state,
        todaySpecial: {
          loading: false,
          items: [],
        },
      };

    case GET_RECOMMENDED_PIZZA_REQUEST:
      return {
        ...state,
        recommended: {
          loading: true,
          items: [],
        },
      };

    case GET_RECOMMENDED_PIZZA_SUCCESS:
      return {
        ...state,
        recommended: {
          loading: false,
          items: action.payload,
        },
      };

    case GET_RECOMMENDED_PIZZA_FAILURE:
      return {
        ...state,
        recommended: {
          loading: false,
          items: [],
        },
      };
    default:
      return state;
  }
}
