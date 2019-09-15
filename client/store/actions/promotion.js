import ApiService from '~/services/ApiService';

import { PROMOTION_IS_LOADING, PROMOTION_DATA_FETCHED, PROMOTION_DATA_ERROR } from '../actionsTypes';

export const promotionIsLoading = (isLoading = true) => {
  return {
    type: PROMOTION_IS_LOADING,
    isLoading
  };
};

export const promotionDataFetched = (data = {}) => {
  return {
    type: PROMOTION_DATA_FETCHED,
    data
  };
};

export const promotionDataError = () => {
  return {
    type: PROMOTION_DATA_ERROR,
  };
};

export const promotionFetch = () => {
  return (dispatch) => {
    dispatch(promotionIsLoading(true));
    return ApiService.fetchPromotion()
      .then(({data}) => {
        dispatch(promotionDataFetched(data));
        dispatch(promotionIsLoading(false));
        return data;
      })
      .catch(err => {
        dispatch(promotionDataError());
        dispatch(promotionIsLoading(false));
        return Promise.reject(err);
      });
  };
};