import React from 'react'
import "./Navbar.css"
import logo from "../../assets/images/logo.png"

function Navbar() {
    return (
        <nav className='nav-pad'>

            <img src={logo} alt="Logo" className="logo" />


            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About Us</li>
                <li>Testimonials</li>
                <li className='btn'>Contact Us</li>


            </ul>
        </nav>
    )
}

export default Navbar



