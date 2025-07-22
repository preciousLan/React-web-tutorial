import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/images/logo.png"

function Navbar() {
    const[useNav,setuseNav]= useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
          window.scrollY > 50? setuseNav(true): setuseNav(false)
          console.log("here")
        })
    },[])


    return (
        <nav className={`nav-pad ${useNav?"sidebar": "" }`}>
           

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



