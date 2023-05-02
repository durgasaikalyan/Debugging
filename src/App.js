/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/named */
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {NotFoundRoute} from './components/NotFound'
import {Home} from './components/Home'
import {AboutRoute} from './components/about'
import {ContactRoute} from './components/Contact'
import {Header} from './components/Header'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
export default App
