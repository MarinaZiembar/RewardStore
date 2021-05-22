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

const products = (state = [], action) => {
  switch (action.type) {
    case 'API_SUCCESS':
      return action.products
    default:
      return state
  }
}

const routeId = (state = 1, action) => {
  switch (action.type) {
    case 'SELECTED_ROUTE':
      return action.id
    default:
      return state
  }
}

const userData = (state = [], action) => {
  switch (action.type) {
    case 'USER_DATA':
      return action.data
    default:
      return state
  }
}

const addPoints = (state = false, action) => {
  switch (action.type) {
    case 'ADD_POINTS':
      return action.added
    default:
      return state
  }
}

const redeemProduct = (state = false, action) => {
  switch (action.type) {
    case 'REDEEM_PRODUCT':
      return action.redeemed
    default:
      return state
  }
}



export default combineReducers({
  apiError,
  apiLoading,
  products,
  routeId,
  userData,
  addPoints,
  redeemProduct
})