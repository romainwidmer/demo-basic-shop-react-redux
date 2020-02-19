import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementAmount, decrementAmount, removeItem } from '../../redux/actions/cartActions'

export default function CartPage() {
    const { cartItems, total } = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()

    const increment = (id) => {
        dispatch(incrementAmount(id))
    }

    const decrement = (id) => {
        dispatch(decrementAmount(id))
    }

    const remove = (id) => {
        dispatch(removeItem(id))
    }


    const output = cartItems.length ? (
        cartItems.map(item => {
            return(
                <li key={item.id} className="item">
                    <div className="img-wrapper">
                        <img src={item.img} alt=""/>
                    </div>
                    <div className="details">
                        <span>{item.title}</span>
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
    ) : <p>Cart empty</p>

    return(
        <div className="cart container">
            <h2>Cart</h2>
            <h4>Total: {total}</h4>

            <ul>
                {output}
            </ul>
        </div>
    )
}
