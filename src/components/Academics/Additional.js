import React from "react";
import "./Addition.css";
import { BsLaptop } from "react-icons/bs";
import { IoBookSharp } from "react-icons/io5";
import { FcGraduationCap } from "react-icons/fc";
import { MdSportsVolleyball } from "react-icons/md";
import { IconContext } from "react-icons/lib";
const Additional = () => {
  return (
    <div className="additional">
      <IconContext.Provider value={{ color: "#d6d638", className: "icon4" }}>
        <h1>Additional Activities</h1>
        <div className="addon">
          <div className="add1">
            <p>
              <BsLaptop />
            </p>
            <p>ONLINE CLASS</p>
          </div>
          <div className="add2">
            <p>
              <IoBookSharp />
            </p>
            <p>INCL. BOOKS</p>
          </div>
          <div className="add3">
            <p>
              <FcGraduationCap />
            </p>
            <p>CERTIFICATIONS</p>
          </div>
          <div className="add4">
            <p>
              <MdSportsVolleyball />
            </p>
            <p>MANY SPORTS</p>
          </div>
        </div>
      </IconContext.Provider>

      <div className="additionalGrid">
        <div className="column-one">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Facademics%2Factivity%20(1)%20(1).jpg?alt=media&token=ef82efff-2fc9-4825-a32c-b120c91b19cb"
            alt=""
          />
        </div>
        <div className="column-two">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Facademics%2Fcarrom%20board_11zon.jpg?alt=media&token=17e95c95-bef1-42f0-9a7a-40332f6ade15"
            alt=""
          />
        
        <img
          src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Facademics%2Fpaimtingkids_11zon.jpg?alt=media&token=b26c8871-a3a1-4b73-95f1-0c8439501c12"
          alt=""
        />
        </div>
        <div className="column-three">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Facademics%2Fplanting.webp?alt=media&token=fa15fb00-56c0-4b77-81e4-5fcfae9beacb"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Facademics%2Fdrawing%20(1)%20(1).jpg?alt=media&token=6d855dcb-8abf-4a22-b87a-120a36472327"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Additional;
