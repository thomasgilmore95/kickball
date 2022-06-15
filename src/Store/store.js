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

function kickball(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_INPUT_VALUE':
      return {
        ...state,
        inputValue: action.updatedInputValue, 
      }
    default:
      return state
  }
}

const kickballApp = combineReducers({
  kickball
})

export default kickballApp;
