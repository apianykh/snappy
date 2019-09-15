import { VENDORS_IS_LOADING, VENDORS_DATA_FETCHED, VENDORS_DATA_ERROR } from '../actionsTypes';

const initialState = {
  items: [],
  isLoading: false,
  hasError: false,
};

export default (state = initialState, action) => 
{
  switch(action.type) {
    case VENDORS_IS_LOADING: 
      return {
        ...state,
        isLoading: action.isLoading
      };
    case VENDORS_DATA_FETCHED: 
      return {
        ...state,
        items: action.data,
      };
    case VENDORS_DATA_ERROR: 
      return {
        ...state,
        ...initialState,
        hasError: true
      };
    default:
      return state;
  }
};