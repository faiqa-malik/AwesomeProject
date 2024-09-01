import {configureStore} from '@reduxjs/toolkit'
import locationReducer from './locationReducer';

const rootReducer = configureStore({
  locationReducer
});



export default store;