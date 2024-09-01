import { SET_LOCATION } from './locationAction';

const initialState = {
  pickup: '',
  destination: '',
};

const locationreducer=(state=initialState,action)=> {
    switch (action.type) {
      case SET_LOCATION:
        return {
          ...state,
          pickup: action.payload.pickup,
          destination: action.payload.destination,
        };
      default:
        return state;
    }
  };
  export default locationreducer;
