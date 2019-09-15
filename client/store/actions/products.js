import ApiService from '~/services/ApiService';

import { PRODUCTS_IS_LOADING, PRODUCTS_DATA_FETCHED, PRODUCTS_DATA_ERROR } from '../actionsTypes';

export const productsIsLoading = (isLoading = true) => {
  return {
    type: PRODUCTS_IS_LOADING,
    isLoading
  };
};

export const productsDataFetched = (data = {}) => {
  return {
    type: PRODUCTS_DATA_FETCHED,
    data
  };
};

export const productsDataError = () => {
  return {
    type: PRODUCTS_DATA_ERROR,
  };
};

export const productsFetch = (payload = {}) => {
  return (dispatch) => {
    dispatch(productsIsLoading(true));
    return ApiService.fetchProducts(payload)
      .then(({data}) => {
        dispatch(productsDataFetched(data));
        dispatch(productsIsLoading(false));
        return data;
      })
      .catch(err => {
        dispatch(productsDataError());
        dispatch(productsIsLoading(false));
        return Promise.reject(err);
      });
  };
};