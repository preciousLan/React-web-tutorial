import React from 'react'
import image from "../../assets/images/img-home.jpg"
import "./Hero.css"
import dark_arrow from "../../assets/images/dark-arrow.png"

const Hero = () => {
    return (
        <div className='hero container'>
            <h1>We Ensure better education <br></br> for a better World</h1>
            <p> our cutting-edge curriculum is designed to empower students with
                the knowledge, skills and experiences needed to excel in the dynamic
                field of education
            </p>
            <button className='btn'>Explore more
                <img src={dark_arrow} ></img>
            </button>
        </div>
    )
}

export default Hero
