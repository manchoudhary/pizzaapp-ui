import {
  SEARCH_REQUEST,
  SEARCH_FAILURE,
  SEARCH_SUCCESS,
} from './search.actionTypes';

const initialState = {
  loading: false,
  items: [],
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        items: [],
      };

    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        items: [],
      };

    case 'CLEAR_SEARCH':
      return {
        loading: false,
        items: [],
      };
    default:
      return state;
  }
}
