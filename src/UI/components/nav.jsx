import React from 'react'
import { Link } from 'react-router-dom'

export default function NavComponent() {
    return(
        <nav>
            <div className="container">
                <Link to="/" className="logo-brand">Shopping</Link>

                <ul>
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </div>
        </nav>
    )
}
