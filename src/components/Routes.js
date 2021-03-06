import React from 'react'

import { Router, Switch, Route} from 'react-router-dom'

import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Home from '../pages/home/Home'
import NotFound from './NotFound'

import {history} from '../history'

const Routes = () => (
    <Router history={history}> 
        <Switch> 
            <Route component={Login} exact path="/login"/>
            <Route component={Register} exact path="/register"/>
            <Route component={Home} exact path="/"/>
        </Switch>
    </Router>

)

export default Routes