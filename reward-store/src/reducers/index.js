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

const addPoints = (state = new Date(), action) => {
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

const showSuccessModal = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_SUCCESS_MODAL':
      return action.showSuccess
    default:
      return state
  }
}

const showFailureModal = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_FAILURE_MODAL':
      return action.showFailure
    default:
      return state
  }
}

const category = (state = "", action) => {
  switch (action.type) {
    case 'GET_CATEGORY':
      return action.category
    default:
      return state
  }
}

const order = (state = "", action) => {
  switch (action.type) {
    case 'GET_ORDER':
      return action.order
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
  redeemProduct,
  category,
  order,
  showSuccessModal,
  showFailureModal
})