import React, { Component } from 'react'
import { NavLink } from "react-router-dom"


export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
          <NavLink className="navbar-brand" to="#">Noxe</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/movies">Movies</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tv">TvShows</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">People</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">NetWorkes</NavLink>
              </li>

            </ul>

          </div>
        </nav>
      </>
    )
  }
}
