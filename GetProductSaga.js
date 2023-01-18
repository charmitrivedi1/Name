import {put} from 'redux-saga/effects';


import { GetProductResponse } from '../Action/GetProductAction';



import { LoaderAction } from '../Action/LoaderAction';

export function* getProductSaga() {
  try {
    const getproduct = yield fetch("https://jsonplaceholder.typicode.com/photos?", {
      method: 'GET',
    });
    const respose = yield getproduct.json();
    if(getproduct.status == 200){
      yield put(GetProductResponse(respose));
    }
    yield put(LoaderAction(false));
  } catch (e) {
    console.log('Get Product Saga Catch Part ::', e);
  }
}
