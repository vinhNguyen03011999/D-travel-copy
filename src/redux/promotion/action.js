import * as types from './types';

// Add new promotion
export const addNewPromotion = (data, token) => {
    return {
        type: types.ADD_PROMOTION,
        payload: data,
        token,
    };
};

export const addNewPromotionSuccess = data => {
    return {
        type: types.ADD_PROMOTION_SUCCESS,
        payload: data,
    };
};

export const addNewPromotionFailed = error => {
    return {
        type: types.ADD_PROMOTION_FAILED,
        error: error,
    };
};

// Get all promotion
export const getAllPromotion = (token) => {
    return {
        type: types.GET_ALL_PROMOTIONS,
        token,
    };
};

export const getAllSuccess = data => {
    return {
        type: types.GET_ALL_PROMOTIONS_SUCCESS,
        payload: data,
    };
};

export const getAllFailed = error => {
    return {
        type: types.GET_ALL_PROMOTIONS_FAILED,
        error: error,
    };
};

// Get one from promotion
export const getPromotion = (id, token) => {
    return {
        type: types.GET_PROMOTION,
        payload: id,
        token,
    };
};
  
export const getPromotionSuccess = data => {
    return {
        type: types.GET_PROMOTION_SUCCESS,
        payload: data,
    };
};
  
export const getPromotionFailed = error => {
    return {
        type: types.GET_PROMOTION_FAILED,
        error: error,
    };
};

//Update promotion
export const updatePromotion = (data, token) => {
    return {
        type: types.UPDATE_PROMOTION,
        payload: data,
        token,
    };
};
  
export const updatePromotionSuccess = data => {
    return {
        type: types.UPDATE_PROMOTION_SUCCESS,
        payload: data,
    };
};
  
export const updatePromotionFailed = error => {
    return {
        type: types.UPDATE_PROMOTION_FAILED,
        error: error,
    };
};

// Delete promotion
export const deletePromotion = (id, token) => {
    return {
        type: types.DELETE_PROMOTION,
        payload: id,
        token,
    };
};
  
export const deletePromotionSuccess = data => {
    return {
        type: types.DELETE_PROMOTION_SUCCESS,
        payload: data,
    };
};
  
export const deletePromotionFailed = error => {
    return {
        type: types.DELETE_PROMOTION_FAILED,
        error: error,
    };
};
