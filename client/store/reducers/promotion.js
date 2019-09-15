import { PROMOTION_IS_LOADING, PROMOTION_DATA_FETCHED, PROMOTION_DATA_ERROR } from '../actionsTypes';

const initialState = {
  item: {},
  isLoading: false,
  hasError: false,
};

export default (state = initialState, action) => 
{
  switch(action.type) {
    case PROMOTION_IS_LOADING: 
      return {
        ...state,
        isLoading: action.isLoading
      };
    case PROMOTION_DATA_FETCHED: 
      return {
        ...state,
        item: action.data,
      };
    case PROMOTION_DATA_ERROR: 
      return {
        ...state,
        ...initialState,
        hasError: true
      };
    default:
      return state;
  }
};