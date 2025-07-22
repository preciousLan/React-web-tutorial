import React from 'react'
import "./Title.css"

const Title = ({heading, subheading}) => {
  return (
    <div>
       <div className="title">
                <p>{heading}</p>
                <h1>{subheading}</h1>
            </div>
    </div>
  )
}

export default Title
