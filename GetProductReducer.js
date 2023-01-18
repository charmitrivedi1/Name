//import {GET_PRODUCT_REQUEST, GET_PRODUCT_RESPONSE} from '../../../TEST/src/helper/Types';


const initialState = {
  data: null,
};

export const GetProductReducer = (state = initialState, action) => {
  const prevState = {...state};
  const {type} = action;

  switch (type) {
    case 'GET_PRODUCT_REQUEST':
      return {
        state:state,
        ...prevState,
        action: action,
      };
    case 'GET_PRODUCT_RESPONSE':
      return {
        state:state,
        ...prevState,
        data: action.payload,
      };
  }
  return prevState;
};
