import {combineReducers} from 'redux';
import application from '../application/application.reducer';
import homeReducer from '../screens/Home/home.reducer';
import productDetailsReducer from '../screens/ProductDetails/productDetails.reducer';
import searchReducer from '../screens/Search/search.reducer';

export default combineReducers({
  // reducers
  application,
  homeReducer,
  productDetailsReducer,
  searchReducer,
});
