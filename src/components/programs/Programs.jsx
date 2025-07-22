import "./Programs.css"
import React from 'react'
import image1 from "../../assets/images/program-1.png"
import image2 from "../../assets/images/program-2.png"
import image3 from "../../assets/images/program-3.png"
import image4 from '../../assets/images/about.png'
import image5 from "../../assets/images/play-icon.png"
import icon1 from "../../assets/images/program-icon-1.png"
import icon2 from "../../assets/images/program-icon-2.png"
import icon3 from "../../assets/images/program-icon-3.png"

const Programs = () => {
    return (
        <div >
           
            <div className="programs">

                <div className="program">
                    <img src={image1} ></img>

                    <div className="caption">
                        <img src={icon1}></img>
                        <p>Graduation Degree</p>
                    </div>
                </div>

                <div className="program">
                    <img src={image2} ></img>

                    <div className="caption">
                        <img src={icon2}></img>
                        <p>Master Degree</p>
                    </div>
                </div>

                <div className="program">
                    <img src={image3} ></img>

                    <div className="caption">
                        <img src={icon3}></img>
                        <p>Post Graduation</p>
                    </div>
                </div>



            </div>

            <div className="about-uni">

                <div className="about-img">
                    <img src={image4} ></img>
                    <div className="about-icon">
                        <img src={image5}></img>

                    </div>

                </div>

                <div className="uni-text">
                    <h3>ABOUT UNIVERSITY</h3>
                    <h1>Nurturing Tomorrow's <br></br> Leaders Today</h1>
                    <p>Embark on a transformative educational journey with our
                        university's comprehensive education programs. Our cutting-edge curriculum is designed to empower
                        students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.
                    </p>

                    <p>With a focus on innovation, hands-on learning, and personalized mentorship,
                        our programs prepare aspiring educators to make a meaningful
                        impact in classrooms, schools, and communities.
                    </p>

                    <p>Whether you aspire to become a teacher, administrator, counselor,
                        or educational leader, our diverse range of programs offers
                        the perfect pathway to achieve your goals and unlock your full
                        potential in shaping the future of education.
                    </p>


                </div>
            </div>

        </div>
    )
}

export default Programs
