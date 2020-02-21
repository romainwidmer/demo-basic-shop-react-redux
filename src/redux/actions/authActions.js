export const login = () => {
    return(dispatch) => {
        const user = { username: 'romain' }

        dispatch({ type: 'LOGIN', payload: user })
    }
}

export const initUserFromStorage = (userData) => {
    return(dispatch) => {

        dispatch({ type: 'INIT_USER_FROM_STORAGE', payload: userData })
    }
}
