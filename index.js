import {take, takeEvery, takeLatest, all} from 'redux-saga/effects';


import { ADD_PRODUCT_REQUEST, GET_PRODUCT_REQUEST } from '../../src/helper/Types';




import {getProductSaga} from './GetProductSaga';

export default function* root_saga() {
  yield all([
   
    takeEvery(GET_PRODUCT_REQUEST, getProductSaga),
 
  ]);
}
