import {headers, apiUrl} from '../utils/Api';



export const apiError = bool => (
    {
        type: 'API_ERROR',
        error: bool
    }
)

  
export const apiLoading = bool => (
    {
        type: 'API_LOADING',
        loading: bool
    }
)
  
export const apiSuccess = products => (
    {
        type: 'API_SUCCESS',
        products
    }
)



export const selectedRoute = id => (
    {
        type: 'SELECTED_ROUTE',
        id
    }
)


export const userDataSuccess = data => (
    {
        type: 'USER_DATA',
        data
    }
)


export const addPointsSuccess = timeStamp =>(
    {
        type:'ADD_POINTS',
        added:timeStamp
    }
)

export const redeemProductSuccess = bool =>(
    {
        type:'REDEEM_PRODUCT',
        redeemed:bool
    }
)


export const currentCategory = category =>(
    {
        type:'GET_CATEGORY',
        category
    }
)

export const currentOrder = order =>(
    {
        type:'GET_ORDER',
        order
    }
)

export const setShowSuccessModal = bool =>(
    {
        type:'SHOW_SUCCESS_MODAL',
        showSuccess:bool
    }
)

export const setShowFailureModal = bool =>(
    {
        type:'SHOW_FAILURE_MODAL',
        showFailure:bool
    }
)




  
  
export const getProducts = () => {
    return dispatch => {

        dispatch(apiError(false))

        dispatch(apiLoading(true))

        fetch(`${apiUrl}/products`, {
            headers:headers
        })
        .then((response) => {
            if (!response.ok) {
            throw Error(response.statusText)
            }

            dispatch(apiLoading(false))

            return response
        })
        .then((response) => response.json())

        .then((products) => dispatch(apiSuccess(products)))

        .catch((error) => {
            dispatch(apiError(true));
        } )
    }
}

export const getUserHistory = () => {
    return dispatch => {

        dispatch(apiError(false))

        dispatch(apiLoading(true))

        fetch(`${apiUrl}/user/history`, {
            headers:headers
        })
        .then((response) => {
            if (!response.ok) {
            throw Error(response.statusText)
            }

            dispatch(apiLoading(false))

            return response
        })
        .then((response) => response.json())

        .then((redeemedProducts) => dispatch(apiSuccess(redeemedProducts.reverse())))

        .catch((error) => {
            dispatch(apiError(true));
        } )
    }
}

export const getRouteId = id => {
    return dispatch => {

        dispatch(selectedRoute(id));

    }
}

export const getUserData = () => {
    return dispatch => {

        dispatch(apiError(false))

        dispatch(apiLoading(true))

        fetch(`${apiUrl}/user/me`, {
            headers:headers
        })
        .then((response) => {
            if (!response.ok) {
            throw Error(response.statusText)
            }

            dispatch(apiLoading(false))

            return response
        })
        .then((response) => response.json())
        .then((data) => dispatch(userDataSuccess(data)))
        .catch((error) => {
            dispatch(apiError(true));
        } )
    }
}


export const addPoints = (points) => {
    return dispatch => {

        dispatch(apiError(false))

        dispatch(apiLoading(true))

        fetch(`${apiUrl}/user/points`, {
            headers:headers,
            method:"post",
            body:JSON.stringify({amount:parseInt(points)}),
        })
        .then((response) => {
            if (!response.ok) {
            throw Error(response.statusText)
            }

            dispatch(apiLoading(false))

            return response
        })
        .then((response) => response.body)
        .then(() => dispatch(addPointsSuccess(new Date())))
        .catch((error) => {
            dispatch(apiError(true));
        } )
    }
}

export const redeemProduct = (id) => {
    return dispatch => {

        dispatch(redeemProductSuccess(false))

        dispatch(apiLoading(true))

        fetch(`${apiUrl}/redeem`, {
            headers:headers,
            method:"post",
            body:JSON.stringify({productId:id}),
        })
        .then((response) => {
            if (!response.ok) {
            throw Error(response.statusText)
            }

            dispatch(apiLoading(false))

            return response
        })
        .then((response) => response.body)
        .then(() => {
            dispatch(setShowSuccessModal(true));
            dispatch(redeemProductSuccess(true));
        })
        .catch(() => dispatch(setShowFailureModal(true)))
    }
}

export const getCategory = (category) => {
    return dispatch => {

        dispatch(currentCategory(category))
    }
}

export const getOrder = (order) => {
    return dispatch => {

        dispatch(currentOrder(order))
    }
}

export const setShowFailure = (bool) => {
    return dispatch => {

        dispatch(setShowFailureModal(bool))
    }
}

export const setShowSuccess = (bool) => {
    return dispatch => {

        dispatch(setShowSuccessModal(bool))
    }
}







