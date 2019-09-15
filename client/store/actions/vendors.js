import ApiService from '~/services/ApiService';

import { VENDORS_IS_LOADING, VENDORS_DATA_FETCHED, VENDORS_DATA_ERROR } from '../actionsTypes';

export const vendorsIsLoading = (isLoading = true) => {
  return {
    type: VENDORS_IS_LOADING,
    isLoading
  };
};

export const vendorsDataFetched = (data = {}) => {
  return {
    type: VENDORS_DATA_FETCHED,
    data
  };
};

export const vendorsDataError = () => {
  return {
    type: VENDORS_DATA_ERROR,
  };
};

export const vendorsFetch = () => {
  return (dispatch) => {
    dispatch(vendorsIsLoading(true));
    return ApiService.fetchVendors()
      .then(({data}) => {
        dispatch(vendorsDataFetched(data));
        dispatch(vendorsIsLoading(false));
        return data;
      })
      .catch(err => {
        dispatch(vendorsDataError());
        dispatch(vendorsIsLoading(false));
        return Promise.reject(err);
      });
  };
};