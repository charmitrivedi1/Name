//import {LOADER} from '../../helper/Types';
import { LOADER } from '../../src/helper/Types';

const initialState = {
  loader: false,
};

export const loaderReducer = (state = initialState, action) => {
  const prevState = {...state};
  const {type} = action;
  console.log('Loader Reducer before Switch case type call :::', type);

  switch (type) {
    case LOADER:
      console.log('Loader Reducer type call::', type);
      return {
        ...prevState,
        loader: action.loader,
      };
  }
  return prevState;
};
