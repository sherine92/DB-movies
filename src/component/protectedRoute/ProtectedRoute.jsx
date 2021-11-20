import React, { Component } from 'react'
import { Route, Redirect } from 'react-router';
import jwt_decode from "jwt-decode";



export default class ProtectedRoute extends Component {
    render() {
        let token = localStorage.getItem('token')
        try {
            var decoded = jwt_decode(token);
            console.log(decoded);
        } catch (error) {
            localStorage.clear()
            return (
                <Redirect to='/login' />
            )

        }

        if (token) {
            return (
                <Route path={this.props.path} component={this.props.component} />
            )
        } else {
            return (
                <Redirect to='/login' />
            )

        }

    }
}
