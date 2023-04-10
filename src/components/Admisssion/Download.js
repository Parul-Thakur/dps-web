import React from "react";
import "./Download.css";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons/lib";
const Download = () => {
  return (
    <div className="download">
      <IconContext.Provider value={{ color: "#daab2b", className: "icon3" }}>
        <div className="funding">
          <p >
            Please check eligibility of the Free Early Education Entitlement{" "}
            <br /> on the Nursery <span> Government Funding</span> page for
            Early Years places.
          </p>{" "}
          <p>
            Application is made by filling in the{" "}
            <span> application form.</span>
            <br /> You can also register for an Open Morning or Book a visit.
          </p>
        </div>
        <div className="usefulDownloads">
          <div className="usefulImg">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fadmission%2Fboardkids_11zon.jpg?alt=media&token=4c840099-b266-46a8-ab09-8f8dfb6f7244"
              alt="linksImage"
            />
          </div>
          <div className="links">
            <h1>Useful Links</h1>
            <p className="usefulLinks">
         
              <BsFillArrowRightSquareFill /> 
              <a
                href="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fadmission%2FAdmission%20Form.pdf?alt=media&token=79ccc509-6bf6-43e0-aaa5-87239dea789c"
                download="FileName.pdf"
                className="link"
              >
                 Application form
              </a>
            </p>

            <p className="usefulLinks">
             
              <BsFillArrowRightSquareFill />
              <NavLink to="/dps-web/admission/fees" className="link">
                Fees
              </NavLink>
            </p>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Download;
