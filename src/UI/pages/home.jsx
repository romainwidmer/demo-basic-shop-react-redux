import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Button } from 'react-bootstrap'

// import personal stuff
import { addToCart, initCartFromLocalStorage } from '../../redux/actions/cartActions'

// import localStorage stuff
import { loadCart } from '../../localStorage'

export default function HomePage() {
    const productReducer = useSelector(state => state.productReducer)
    const { cartItems } = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        if(cartItems.length === 0) {
            if(loadCart() !== undefined) {
                dispatch(initCartFromLocalStorage(loadCart().cart.cartItems))
            }
        }
    })

    const addProductToCart = (id) => {
        dispatch(addToCart(id))
    }

    return(
        <div className="container">
            <h2>Home</h2>

            <h3>Product list</h3>

            <div className="product-wrapper">
                {productReducer.items.map(item => {
                    return (
                        <Card key={item.id} style={{ width: '18rem' }}> 
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.title} <span>{item.price}.-</span></Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                {!item.inCart && <Button variant="primary" onClick={() => addProductToCart(item.id)}>Add to cart</Button>}
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}
