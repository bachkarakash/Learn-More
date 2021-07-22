import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom';

import Navitems from './NavItems';
import axios from 'axios'

const Navbar = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const getCourses = async () => {
            const response = await axios.get("/course/getAll")
            console.log(response)
            setCourses(response.data);
        }
        getCourses();
    },[])
    console.log(courses)
    return (
        <div className="headerBar">
            <nav className="navbar navbar-expand-lg navbar-light" id="appNavbar">
                <NavLink className="navbar-brand nav-bar-items" to="#">Learn More</NavLink>
                <button className="navbar-toggler" id="nav-hamburger" color="white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto" >
                    <NavLink key='home' data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link nav-bar-items" to={'/home'}>Home</NavLink>
                        {courses.map((item, index) => {
                            return (
                                <li className="nav-item">
                                    <NavLink key={item.name} data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link nav-bar-items" to={{ pathname: `/blogs/${item._id}`, courseId: item._id }}>{item.name}</NavLink>
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
        </div>
    )
}

export default Navbar