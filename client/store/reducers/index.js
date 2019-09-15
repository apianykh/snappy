import { combineReducers } from 'redux';
import products from './products';
import vendors from './vendors';
import promotion from './promotion';


export default combineReducers({
  products,
  vendors,
  promotion,
});