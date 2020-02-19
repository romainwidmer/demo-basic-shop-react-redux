import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import redux actions
import { incrementAmount, decrementAmount, removeItem, addToCart, initCartFromLocalStorage } from '../../redux/actions/cartActions'

// import localStorage stuff
import { loadCart } from '../../localStorage'

export default function CartPage() {
    const { cartItems, total } = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        if(cartItems.length === 0) {
            if(loadCart() !== undefined) {
                dispatch(initCartFromLocalStorage(loadCart().cart.cartItems))
            }
        }
    }, [])

    const increment = (id) => {
        dispatch(incrementAmount(id))
    }

    const decrement = (id) => {
        dispatch(decrementAmount(id))
    }

    const remove = (id) => {
        dispatch(removeItem(id))
    }

    const cartOutput = (items) => {
        return items.map(item => {
            return(
                <li key={item.id} className="item">
                    <div className="img-wrapper">
                        <img src={item.img} alt=""/>
                    </div>
                    <div className="details">
                        <span>{item.title}</span> <span>{item.price}.-</span>
                        <p>{item.description}</p>
                        <p>Quantity: {item.quantity}</p>
                        <div className="add-remove">
                            <button onClick={() => increment(item.id)}>+</button>
                            <button onClick={() => decrement(item.id)}>-</button>
                            <button onClick={() => remove(item.id)}>Remove</button>
                        </div>
                    </div>
                </li>
            )
        })
    }

    let output = null
    let totalOutput = 0

    if(cartItems.length) {
        console.log('load cart from redux store')
        output = cartOutput(cartItems)
        totalOutput = total 
    } else {
        if(loadCart() === undefined) {
            output = <p>Cart empty</p>
        } else {
            console.log('load cart from localStorage')
            const { cartItems, total } = loadCart().cart
            output = cartOutput(cartItems)
            totalOutput = total
        }
    }

    return(
        <div className="cart container">
            <h2>Cart</h2>

            <ul>
                {output}
            </ul>

            <div className="total">
                <h4>Total: {totalOutput}</h4>
            </div>
        </div>
    )
}
