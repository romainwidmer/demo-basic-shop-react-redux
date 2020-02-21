export const initCartFromLocalStorage = (items) => {
    return(dispatch, getState) => {
        let total = 0

        items.map(item => {
            total += (item.quantity * item.price)
        })

        dispatch({ type: 'INIT_CART', payload: { items, total } })

    }
}

/**
 * @param {Integer} id 
 */
export const addToCart = (id) => {
    return(dispatch, getState) => {
        const { items } = getState().productReducer

        // get the item from the product reducer state
        let addedItem = items.find(item => item.id === id)
        addedItem.inCart = true
        dispatch({ type: 'ADD_TO_CART', payload: addedItem })
    }
}


/**
 * @param {Integer} id 
 */
export const incrementAmount = (id) => {
    return(dispatch, getState) => {
        const { cartItems, total } = getState().cartReducer

        // find the item in the list
        let itemToUpdate = cartItems.find(item => item.id === id)

        // update the quantity for this item
        itemToUpdate.quantity += 1

        const newTotal = total + itemToUpdate.price

        return dispatch({ type: 'INCREMENT', payload: { total: newTotal } })
    }
}


/**
 * @param {Integer} id 
 */
export const decrementAmount = (id) => {
    return(dispatch, getState) => {
        const { cartItems, total } = getState().cartReducer

        // find the item in the list
        let itemToUpdate = cartItems.find(item => item.id === id)

        // init the new total with the total
        let newTotal = total

        // update the quantity
        if(itemToUpdate.quantity > 0) {
            itemToUpdate.quantity -= 1

            // calculate the new total
            newTotal = total - itemToUpdate.price
        }

        return dispatch({ type: 'DECREMENT', payload: { total: newTotal } })
    }
}


/**
 * @param {Integer} id 
 */
export const removeItem = (id) => {
    return(dispatch, getState) => {
        const { cartItems, total } = getState().cartReducer

        // find the item to remove in the list
        const itemToRemove = cartItems.find(item => item.id === id)

        // create a new list of item
        const newCartItems = cartItems.filter(item => item.id !== id)
        
        // calculate the total
        const newTotal = total - (itemToRemove.quantity * itemToRemove.price)

        // remove the tag "inCart" on the product
        const { items } = getState().productReducer

        // get the item from the product reducer state
        let addedItem = items.find(item => item.id === itemToRemove.id)
        addedItem.inCart = false

        return dispatch({ type: 'REMOVE', payload: { cartItems: newCartItems, total: newTotal } })
    }
}
