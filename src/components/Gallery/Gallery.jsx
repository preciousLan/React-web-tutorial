import React from 'react'
import "./Gallery.css"
import gallery1 from "../../assets/images/gallery-1.png"
import gallery2 from "../../assets/images/gallery-2.png"
import gallery3 from "../../assets/images/gallery-3.png"
import gallery4 from "../../assets/images/gallery-4.png"
import whitearrow from "../../assets/images/white-arrow.png"

const Gallery = () => {
    return (
        <div className=' center '>
           
            <div className="photos">
                <img src={gallery1}></img>
                <img src={gallery2}></img>
                <img src={gallery3}></img>
                <img src={gallery4}></img>
            </div>
            <button className='button btn'> See more here
                 <img src={whitearrow} /> 
                 </button>

          

        </div>
    )
}

export default Gallery
