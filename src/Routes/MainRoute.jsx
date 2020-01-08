import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import Profile from '../pages/Profile'
import NotMatch from '../pages/NotMatch'

const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/category/:category" component={Home}/>
                <Route path="/sign-in" component={SignIn}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/not-match" component={NotMatch}/>
            </Switch>
        </BrowserRouter>
    )
}

export default MainRoute;