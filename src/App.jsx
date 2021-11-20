import React, { Component } from 'react'
import Navbar from "./component/Navbar/Navbar"
import Home from "./component/Home/Home"
import Movies from "./component/Movies/Movies"
import Tv from "./component/Tv/Tv"
import Notfound from "./component/Notfound/Notfoundpage"
import { Switch, Route, Redirect } from "react-router-dom"
import Register from './component/Register/Register'
import Login from './component/Login/Login'
import ProtectedRoute from './component/protectedRoute/ProtectedRoute'



export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />

        <Switch>
          {/* <Route path="/home" component={Home} /> */}
          <ProtectedRoute path='/home' component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/tv" component={Tv} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Redirect exact from="/" to='/register' />
          <Route path="*" component={Notfound} />

        </Switch>

      </>
    )
  }
}

