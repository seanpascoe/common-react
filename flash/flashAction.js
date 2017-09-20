import {
  SET_FLASH,
  CLEAR_FLASH
} from './types';

export const setFlash = (message, messageType) => dispatch => {
  dispatch({ type: SET_FLASH, message: message, messageType: messageType });
  setTimeout(()=>{
    dispatch({type: CLEAR_FLASH})
  }, 5000)
}

export const clearFlash = () => dispatch => {
  dispatch({type: CLEAR_FLASH});
}
