const initialState = {
  cartData: {},
};

export default function orderDescriptionReducer(state, action) {
  state = state || initialState;
  switch (action.type) {
    case 'GET_CARTDATA': {
      return {
        ...state,
        cartData: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
