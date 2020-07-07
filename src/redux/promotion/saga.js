import {put, call, takeEvery, takeLatest} from 'redux-saga/effects';
import {
    getPromotion,
    getPromotionById,
    addNewPromotion,
    updatePromotion,
    deletePromotion,
} from '../../api/promotion';
import {
  getAllSuccess,
  getAllFailed,
  getPromotionSuccess,
  getPromotionFailed,
  updatePromotionSuccess,
  updatePromotionFailed,
  deletePromotionSuccess,
  deletePromotionFailed,
  addNewPromotionSuccess,
  addNewPromotionFailed,
} from './action';
import * as types from './types';

import {ToastSuccess, ToastError} from '../../utils/toaster';

function* getAllPromotionsSaga(action) {
    try {
        const resData = yield call(getPromotion, action.token);
        if (resData.data.data) {
            yield put(getAllSuccess(resData.data.data));
        }
    } catch (error) {
        const errs = error.response.data.message;
        yield put(getAllFailed(errs));
        ToastError(errs);
    }
}

function* getPromotionSaga(action) {
    try {
        const resData = yield call(getPromotionById, action.payload, action.token);
        if (resData.data) {
            yield put(getPromotionSuccess(resData.data));
        }
    } catch (error) {
        const errs = error.response.data.message;
        yield put(getPromotionFailed(errs));
    }
}

function* updatePromotionSaga(action) {
    try {
        const resData = yield call(updatePromotion, action.payload.id, action.payload, action.token);
        const fetchData = yield call(getPromotion, action.token);
        if (resData.data.data) {
            yield put(updatePromotionSuccess(resData.data.data));
            yield put(getAllSuccess(fetchData.data.data));
        }
        ToastSuccess(resData.data.message);
    } catch (error) {
        const errs = error.response.data.message;
        yield put(updatePromotionFailed(errs));
    }
}

function* deletePromotionSaga(action) {
    try {
        const resData = yield call(deletePromotion, action.payload, action.token);
        const fetchData = yield call(getPromotion, action.token);
        if (resData.data.data) {
            yield put(deletePromotionSuccess(resData.data.data));
            yield put(getAllSuccess(fetchData.data.data));
        }
        ToastSuccess(resData.data.message);
    } catch (error) {
        const errs = error.response.data.message;
        yield put(deletePromotionFailed(errs));
    }
}

function* addNewPromotionSaga(action) {
    try {
        const resData = yield call(addNewPromotion, action.payload, action.token);
        if (resData.data.data) {
            yield put(addNewPromotionSuccess(resData.data.data));
        }
        ToastSuccess(resData.data.message);
    } catch (error) {
        const errs = error.response.data.message;
        yield put(addNewPromotionFailed(errs));
        ToastError(errs.name[0]);
    }
}

export function* promotionSaga() {
  yield takeEvery(types.GET_ALL_PROMOTIONS, getAllPromotionsSaga);
  yield takeLatest(types.GET_PROMOTION, getPromotionSaga);
  yield takeEvery(types.ADD_PROMOTION, addNewPromotionSaga);
  yield takeEvery(types.UPDATE_PROMOTION, updatePromotionSaga);
  yield takeEvery(types.DELETE_PROMOTION, deletePromotionSaga);
}