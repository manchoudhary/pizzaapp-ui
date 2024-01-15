// const initialState = {
//   cartData: {},
// };

// export default function orderDescriptionReducer(state, action) {
//   state = state || initialState;
//   switch (action.type) {
//     case 'GET_CARTDATA': {
//       return {
//         ...state,
//         cartData: action.payload,
//       };
//     }
//     default: {
//       return {
//         ...state,
//       };
//     }
//   }
// }
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartData: null
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    storedCart: (state, action) => {
      state.cartData = action.payload;
    },
    
  },
});

export const {
  storedCart,
} = cartSlice.actions;

export default cartSlice.reducer;