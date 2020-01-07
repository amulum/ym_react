import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import Profile from '../pages/Profile'

const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/category/:category" component={Home}/>
                <Route path="/sign-in" component={SignIn}/>
                <Route path="/profile" component={Profile}/>
            </Switch>
        </BrowserRouter>
    )
}

export default MainRoute;