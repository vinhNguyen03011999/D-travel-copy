import { combineReducers } from 'redux';
import categoryReducer from './category/reducer';
import districtReducer from './district/reducer';
import promotionReducer from './promotion/reducer';
import siteReducer from './site/reducer';
import adminReducer from './admin/reducer';

const reducers = combineReducers({
    category: categoryReducer,
    district: districtReducer,
    promotion: promotionReducer,
    site: siteReducer,
    admin: adminReducer,
});

export default reducers;