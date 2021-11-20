import React, { Component } from 'react'
import axios from "axios"

export default class Login extends Component {
    state = { errorMessage: "" }
    user = {
        email: "",
        password: "",
    }
    getData = (e) => {
        this.user[e.target.name] = e.target.value
        console.log(this.user);
    }
    sentData = async (e) => {
        e.preventDefault()
        let { data } = await axios.post("https://route-egypt-api.herokuapp.com/signin", this.user)
        console.log(data);
        if (data.message === "success") {
            localStorage.setItem('token', data.token)
            // home
            this.props.history.replace('/home')
        } else {
            this.setState({
                errorMessage: data.message
            })

        }
    }
    render() {

        return (
            <>
                <div className="w-75 mx-auto my-5">
                    <form onSubmit={this.sentData}>

                        <input onChange={this.getData} type="email" name="email" placeholder="E-mail" className="form-control mt-3" />
                        <input onChange={this.getData} type="password" name="password" placeholder="Password" className="form-control mt-3" />
                        {this.state.errorMessage}
                        <button className="btn btn-info float-right mt-3">Login</button>
                    </form>
                </div>
            </>
        )
    }
}
