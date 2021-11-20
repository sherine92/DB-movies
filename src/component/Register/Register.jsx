import React, { Component } from 'react'
import axios from 'axios'
export default class Register extends Component {
    user = {
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    }
    getData = (e) => {
        this.user[e.target.name] = e.target.value
        console.log(this.user);
    }
    sentData = async (e) => {
        e.preventDefault()
        let { data } = await axios.post("https://route-egypt-api.herokuapp.com/signup", this.user)
        console.log(data);
        if (data.message === "success") {
            e.target.reset()
        }
    }
    render() {
        return (
            <>
                <div className="w-75 mx-auto my-5">
                    <form onSubmit={this.sentData}>
                        <input onChange={this.getData} type="text" name="first_name" placeholder="First Name" className="form-control mt-3" />
                        <input onChange={this.getData} type="text" name="last_name" placeholder="Last Name" className="form-control mt-3" />
                        <input onChange={this.getData} type="email" name="email" placeholder="E-mail" className="form-control mt-3" />
                        <input onChange={this.getData} type="password" name="password" placeholder="Password" className="form-control mt-3" />
                        <button className="btn btn-info float-right mt-3">Register</button>
                    </form>
                </div>
            </>
        )
    }
}
