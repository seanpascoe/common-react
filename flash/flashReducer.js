import {
  SET_FLASH,
  CLEAR_FLASH,
} from '../actions/types'

const defaultState = {
  display: false,
  message: '',
  messageType: ''
}

const flash = ( state = defaultState, action ) => {
  switch (action.type) {
    case SET_FLASH:
      return { display: true, message: action.message, messageType: action.messageType };
    case CLEAR_FLASH:
      return { display: false, message: '', messageType: ''}
    default:
      return state
  }
}

export default flash
