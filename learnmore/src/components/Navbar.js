import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom';

import Navitems from './NavItems';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="appNavbar" color="primary">
        <NavLink className="navbar-brand" to="#">Learn More</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
                {Navitems.map((item, index) => {
                    return (
                        <li className="nav-item">
                            <NavLink key={item.name} className="nav-link" to={ {pathname: item.path, message: item.name} }>{item.name}</NavLink>
                        </li>
                    )
                })}
                {/* <li className="nav-item">
                    <NavLink className="nav-link" to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/datastructres">Data Structures</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/algorithms">Algorithms</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/systemdesign">System Design</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/fundamentals">Fundamentals</NavLink>
                </li> */}
            </ul>
        </div>
        </nav>
    </>
  )
}

export default Navbar