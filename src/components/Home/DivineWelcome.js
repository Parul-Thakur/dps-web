import React from "react";
import "./DivineWelcome.css";
import ProgressiveImage from "react-progressive-graceful-image";
import { Link } from "react-router-dom";

const DivineWelcome = () => {
  const image =
    "https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2FmainImage%2FwelcomeDivine.jpg?alt=media&token=6e627db8-1296-4381-ac69-5205ede2703d";

  const blurImage =
    "https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2FcompressedImages%2FwelcomeDivine_11zon_11zon_11zon.webp?alt=media&token=6bf277fb-b984-4b34-adad-b90ba5efa627";
  return (
    <div className="welcome">
      <div className="welcomeImage">
        <ProgressiveImage src={image} placeholder={blurImage}>
          {(src, loading) => (
            <img
              src={src}
              alt="welcome"
              className={`image${loading ? " loading" : " loaded"}`}
              width="100%"
              height="100%"
            />
          )}
        </ProgressiveImage>
      </div>
      <div className="welcome-text ">
        <ProgressiveImage src={image} placeholder={blurImage}>
          {(src, loading) => (
            <img
              src={src}
              alt="welcome"
              className={`image${loading ? " loading" : " loaded"}`}
              width="100%"
              height="100%"
            />
          )}
        </ProgressiveImage>

        <div className="textArea">
          <h1>Explore Divine</h1>
        <p>"At Divine, we believe that education is the key to unlocking a bright future, and we are committed to providing the best possible learning environment for our students. We are thrilled that you have taken the time to visit our website. As an educational institution, our goal is to provide a nurturing and stimulating environment for our students to learn, grow, and thrive. We offer a wide range of programs and activities designed to foster intellectual curiosity, creativity, and social responsibility. Whether you are a parent, student, or community member, we hope you find our website informative and engaging. Thank you for your interest in Divine."</p> <br />
        <p className="explore"><Link to = "/about"> learn more</Link></p>
        </div>
      </div>
    </div>
  );
};

export default DivineWelcome;
