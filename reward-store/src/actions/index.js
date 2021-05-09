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


export const userData = data => (
    {
        type: 'USER_DATA',
        data
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

        .then((redeemedProducts) => dispatch(apiSuccess(redeemedProducts)))

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

        .then((data) => dispatch(userData(data)))

        .catch((error) => {
            dispatch(apiError(true));
        } )
    }
}




