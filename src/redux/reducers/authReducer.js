const initialState = {
    user: null,
    error: null
}


const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN':
            console.log('login success')
            return {
                ...state,
                user: action.payload,
                error: null
            }
        case 'INIT_USER_FROM_STORAGE':
            console.log('init user from local storage success')
            return {
                ...state,
                user: action.payload,
                error: null
            }
        default:
            return state
    }
}

export default authReducer
