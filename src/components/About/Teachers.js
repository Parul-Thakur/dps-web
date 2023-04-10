import React from "react";
import Navbar2 from "../Navbar2/Navbar2";
import Footer from "../Home/Footer";
import TeachersCard from "./TeachersCard";
import "./Teachers.css";

const Teachers = () => {
  return (
    <div>
      <Navbar2 />
      <div className="teacherContainer">
        <div className="teacherBackground">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2Fteachers.webp?alt=media&token=75aeeb07-3001-48fb-a4da-3a30ec09bf4a"
            alt="teachers"
          />
        </div>
        <div className="faculty1">
          <h1 className="facultyHeading">Faculty and Staff </h1>
          <hr className="underline" />
          <div className="teacherData">
            <h1> teaching Staff: </h1>
            <TeachersCard />
          </div>
          <div className="teacherData">
            <h1>Administrative Staff: </h1>
            <div
              className="teachersCard"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "3rem",
              }}
            >
              <div
                className="tCard"
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "20px",
                  borderRadius: "5px",
                }}
              >
                <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2Fmd%20(1).jpg?alt=media&token=f254fb8c-0d65-4e92-ab87-0fd2fd51d0d8" alt="headphoto" />
                <h2>Mr. Rakesh Gupta</h2>
                <p>
                  {" "}
                  <span className="title">Title: M.D</span>
                </p>
              </div>
              {/* <div
                className="tCard"
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "20px",
                  borderRadius: "5px",
                }}
              >
                <img src="" alt="teacherphoto" />
                <h2></h2>
                <p>
                  {" "}
                  <span className="title">Title:</span>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Teachers;
