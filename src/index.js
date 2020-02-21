import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import redux stuff
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducers/rootReducer'

// Import personal components
import Navigation from './UI/components/nav'
import HomePage from './UI/pages/home'
import CartPage from './UI/pages/cart'

// import localStorage stuff
import { saveCart } from './localStorage'

// import libs style
import 'bootstrap/dist/css/bootstrap.min.css'

// import personal style
import './style.scss'


// create the application store
const store = createStore(rootReducer, applyMiddleware(thunk))


store.subscribe(() => {
    saveCart({
        cart: store.getState().cartReducer
    })
})

const AppRouter = () => {
    return(
        <Router>
            <Navigation />

            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/cart" component={CartPage} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>, document.getElementById('root')
)