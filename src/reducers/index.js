import { combineReducers } from 'redux';
import manageRestaurants from './manageRestaurant';

export default combineReducers({
  restaurants: {manageRestaurants}
});
