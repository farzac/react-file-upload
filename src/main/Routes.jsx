import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import ProductType from '../components/product/ProductType'
import FileReader from '../components/product/FileReader'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/productType' component={ProductType} / >
        <Route path='/fileReader' component={FileReader} / >
        <Redirect from='*' to='/' />
    </Switch>