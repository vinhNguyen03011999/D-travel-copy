import * as types from './types';

const initialState = {
  promotions: [],
  promotion: [],
  searchResult: [],
  error: [],
  loading: false,
};

const promotionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PROMOTION:
        return {
            ...state,
            loading: true,
            promotion: action.payload,
        };
    case types.ADD_PROMOTION_SUCCESS:
        return {
            ...state,
            loading: false,
            promotion: action.payload,
        };
    case types.ADD_PROMOTION_FAILED:
        return {
            ...state,
            loading: false,
            error: action.error,
        };
    case types.GET_ALL_PROMOTIONS:
        return {
            ...state,
            loading: true,
        };
    case types.GET_ALL_PROMOTIONS_SUCCESS:
        return {
            ...state,
            loading: false,
            promotions: action.payload,
        };
    case types.GET_ALL_PROMOTIONS_FAILED:
        return {
            ...state,
            loading: false,
            error: action.error,
        };
    case types.GET_PROMOTION:
        return {
            ...state,
            loading: true,
        };
    case types.GET_PROMOTION_SUCCESS:
        return {
            ...state,
            loading: false,
            promotion: action.payload,
        };
    case types.GET_PROMOTION_FAILED:
        return {
            ...state,
            loading: false,
            error: action.error,
        };
    case types.UPDATE_PROMOTION:
        return {
            ...state,
            loading: true,
            promotion: action.payload,
        };
    case types.UPDATE_PROMOTION_SUCCESS:
        return {
            ...state,
            loading: false,
            promotion: action.payload,
        };
    case types.UPDATE_PROMOTION_FAILED:
        return {
            ...state,
            loading: false,
            error: action.error,
        };
    case types.DELETE_PROMOTION:
        return {
            ...state,
            loading: true,
        };
    case types.DELETE_PROMOTION_SUCCESS:
        return {
            ...state,
            loading: false,
            promotion: action.payload,
        };
    case types.DELETE_PROMOTION_FAILED:
        return {
            ...state,
            loading: false,
            error: action.error,
        };
    default:
        return state;
  }
};

export default promotionReducer;