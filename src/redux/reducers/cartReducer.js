const initialState = {
    cartItems: [],
    total: 0
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            let existing_item = state.cartItems.find(item => item.id === action.payload.id)

            if(existing_item) {
                existing_item.quantity += 1
                return {
                    state,
                    total: state.total + existing_item.price
                }
            } else {
                let newItem = action.payload
                newItem.quantity = 1

                const newTotal = state.total + newItem.price

                return {
                    ...state,
                    cartItems: [...state.cartItems, newItem],
                    total: newTotal
                }
            }
        case 'INCREMENT':
            return {
                ...state,
                total: action.payload.total
            }
        case 'DECREMENT':
            return {
                ...state,
                total: action.payload.total
            }
        case 'REMOVE':
            return {
                ...state,
                cartItems: action.payload.cartItems,
                total: action.payload.total
            }
        default:
            return state
    }
}

export default cartReducer
