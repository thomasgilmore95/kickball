import { combineReducers } from 'redux';

const initialState = {
  inputValue: '',
  errorForInput: false,
  alignment: '',
  submitButtonDisabled: true,
};

export function updateInputValue(updatedInputValue) {
  return {
    type: 'UPDATE_INPUT_VALUE',
    updatedInputValue
  }
}

export function updateErrorForInput(updatedErrorForInput) {
  return {
    type: 'UPDATE_ERROR_FOR_INPUT',
    updatedErrorForInput
  }
}

export function updateAlignment(updatedAlignment) {
  return {
    type: 'UPDATE_ALIGNMENT',
    updatedAlignment
  }
}

export function updateSubmitButtonDisabled(updatedSubmitButtonDisabled) {
  return {
    type: 'UPDATE_SUBMIT_BUTTON_DISABLED',
    updatedSubmitButtonDisabled
  }
}

function kickball(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_INPUT_VALUE':
      return {
        ...state,
        inputValue: action.updatedInputValue, 
      }
    case 'UPDATE_ERROR_FOR_INPUT':
      return {
        ...state,
        updatedErrorForInput: action.updatedErrorForInput,
      }
    case 'UPDATE_ALIGNMENT':
      return {
        ...state,
        updatedAlignment: action.updatedAlignment,
      }
    case 'UPDATE_SUBMIT_BUTTON_DISABLED':
      return {
        ...state,
        updatedSubmitButtonDisabled: action.updatedSubmitButtonDisabled,
      }
    default:
      return state
  }
}

const kickballApp = combineReducers({
  kickball
})

export default kickballApp;
