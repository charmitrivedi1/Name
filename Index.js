import {combineReducers} from 'redux';

import {GetProductReducer} from './GetProductReducer';

import {loaderReducer} from './LoderReducer';




export default combineReducers({
  GetProduct: GetProductReducer,

  Loader: loaderReducer,
  
  

});
