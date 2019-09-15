import { PRODUCTS_IS_LOADING, PRODUCTS_DATA_FETCHED, PRODUCTS_DATA_ERROR } from '../actionsTypes';

const initialState = {
  entries: {},
  order: [],
  isLoading: false,
  hasError: false,
};

const productsReducer = (acc, item) => {
  acc[item.id] = item;
  return acc;
};

export default (state = initialState, action) => 
{
  switch(action.type) {
    case PRODUCTS_IS_LOADING: 
      return {
        ...state,
        isLoading: action.isLoading
      };
    case PRODUCTS_DATA_FETCHED: 
      return {
        ...state,
        entries: action.data.reduce(productsReducer, {}),
        order: action.data.sort((a,b) => a.order - b.order).map(el => el.id),
      };
    case PRODUCTS_DATA_ERROR: 
      return {
        ...state,
        ...initialState,
        hasError: true
      };
    default:
      return state;
  }
};