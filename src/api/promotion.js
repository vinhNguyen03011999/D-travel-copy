import {callApi} from './apiCaller';

export const getPromotion = (token) => {
    return callApi('/promotion', 'GET', null, token);
}

export const getPromotionById = (promotionId, token) => {
    return callApi('/promotion/' + promotionId, 'GET', null, token);
}

export const addNewPromotion = (data, token) => {
    return callApi('/promotion', 'POST', data, token);
}

export const updatePromotion = (promotionId, data, token) => {
    return callApi(`/promotion/${promotionId}`, 'PUT', data, token);
}

export const deletePromotion = (promotionId, token) => {
    return callApi(`/promotion/${promotionId}`, 'DELETE', null, token);
}