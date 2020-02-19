import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Button } from 'react-bootstrap'

// import personal stuff
import { addToCart } from '../../redux/actions/cartActions'

export default function HomePage() {
    const productReducer = useSelector(state => state.productReducer)
    const dispatch = useDispatch()

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
                                <Button variant="primary" onClick={() => addProductToCart(item.id)}>Add to cart</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>

        </div>
    )
}
