import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
export default function Navbar(props) {
    return (
        <>
             <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNavDropdown">
    <ul className="navbar-nav ">
      <li className="nav-item active">
        <Link className="nav-link" to='/'>Home</Link>
      </li>
      <li className="nav-item">
        <Link to='/about' className="nav-link">About</Link>
      </li>

    </ul>
    <div className={`form-check form-switch text-${props.mode === "light"?"dark":"light"}`} >
     <input className="form-check-input" type="checkbox" onClick= {props.toggleMode} id="flexSwitchCheckDEfault"/>
     <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === "light"? "Enable Dark Mode": "Disable Dark Mode"}</label>

</div>
</div>
    <form className="d-flex">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
    </form>
</nav>
</>
    )
}

Navbar.propTypes = { title: PropTypes.string.isRequired}

