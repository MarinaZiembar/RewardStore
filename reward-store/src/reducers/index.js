import { combineReducers } from 'redux';



const apiError = (state = false, action) => {
  switch (action.type) {
    case 'API_ERROR':
      return action.error;
    default:
      return state;
  }
}

const apiLoading = (state = false, action) => {
  switch (action.type) {
    case 'API_LOADING':
      return action.loading;
    default:
      return state;
  }
}




export default combineReducers({
  apiError,
  apiLoading
})