//import {GET_PRODUCT_REQUEST, GET_PRODUCT_RESPONSE} from '../../helper/Types';
// import { GET_PRODUCT_REQUEST, GET_PRODUCT_RESPONSE} from '../../../TEST/src/helper/Types';
import { GET_PRODUCT_REQUEST, GET_PRODUCT_RESPONSE } from '../../src/helper/Types';

export function GetProductResponse(data) {
  return {
    type: GET_PRODUCT_RESPONSE,
    payload: data,
  };
}

export function GetProductRequest() {
  return {
    type: GET_PRODUCT_REQUEST,
  };
}
