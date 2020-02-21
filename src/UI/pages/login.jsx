import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { login } from '../../redux/actions/authActions'

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // redux stuff
    const user = useSelector(state => state.authReducer.user)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(login())
        //saveInLocalStorage('user', { user: store.getState().authReducer })
    }

    if(user !== null) {
        return <Redirect to="/" />
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}