import React from 'react'
import '../About/Growth.css'
import {AiOutlineArrowRight} from "react-icons/ai"
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons/lib";
const Growth2 = () => {
  return (
    <div className="growthCard">
     <IconContext.Provider
            value={{ color: "black", className: "icon3" }}
          >
      <div className="growth g1">
        <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fadmission%2Fclassroom_11zon.jpg?alt=media&token=d4b80179-ac38-4684-a2c0-ad92a7eb4bb2" alt="" />
        <div className="growthContent">
          <h1>Open Mornings</h1>
          <p>
          Open Mornings are a great opportunity to see the school and to get an idea of what it is like to be a Divine pupil.
          </p>
          <p>
        <NavLink to="/about" className="link"> About <AiOutlineArrowRight/></NavLink></p>
        </div>
      </div>
      <div className="growth g2">
      <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fadmission%2Fgate%20(1).jpg?alt=media&token=dd87a2db-4f4a-48b7-bd50-3d88db24312e" alt="" />
        <div className="growthContent">
        <h1>Admission Process</h1>
        <p>
        Divine Public School is excited to enroll students who are curious, driven, and ready to look beyond the day-to-day to ask what’s next.  We can’t wait to learn more about you!
        </p>
        <p>
        <NavLink to="/admission/fees" className="link"> Admission Process <AiOutlineArrowRight/></NavLink></p>
      </div>
      </div>
      <div className="growth g3">
      <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fadmission%2Fpose.jpg?alt=media&token=0ecd0496-87a5-4713-9890-9776abf99920" alt="" />
        <div className="growthContent">
        <h1>Uniforms</h1>
        <p>
          We offer our children many leadership and teamwork opportunities to
          build their confidence and prepare them for future challenges.
        </p>
        <p>
        <NavLink to="/admission/fees" className="link"> Uniform <AiOutlineArrowRight/></NavLink></p>
      </div>
      </div>
      </IconContext.Provider>
    </div>
  )
}

export default Growth2