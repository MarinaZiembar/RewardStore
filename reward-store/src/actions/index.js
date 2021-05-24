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

export const redeemProductSuccess = timeStamp =>(
    {
        type:'REDEEM_PRODUCT',
        redeemed:timeStamp
    }
)
export const redeemProductError = bool => (
    {
        type: 'REDEEM_ERROR',
        error: bool
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
            dispatch(addPointsSuccess(new Date()))

            return response
        })
        .then((response) => response.body)
        .catch((error) => {
            dispatch(apiError(true));
        } )
    }
}

export const redeemProduct = (id) => {
    return dispatch => {

        dispatch(redeemProductError(false))

        dispatch(apiLoading(true))

        fetch(`${apiUrl}/redeemt`, {
            headers:headers,
            method:"post",
            body:JSON.stringify({productId:id}),
        })
        .then((response) => {
            if (!response.ok) {
            throw Error(response.statusText)
            }

            dispatch(apiLoading(false))
            dispatch(redeemProductSuccess(new Date()))

            return response
        })
        .then((response) => response.body)
        .catch((error) => {
            dispatch(redeemProductError(true));
        } )
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







