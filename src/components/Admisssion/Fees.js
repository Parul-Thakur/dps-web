import React from "react";
import { motion } from "framer-motion";
import Navbar2 from "../Navbar2/Navbar2";
// import VisitCard from "../Home/VisitCard";
import Footer from "../Home/Footer";
import "./Fees.css";
const Fees = () => {
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar2 />
      <div className="feesContainer">
        <div className="fees">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Facademics%2Ffees.jpg?alt=media&token=26a8c070-d43c-47a1-9cd2-11c316a0cd3e"
            alt="fees-banner"
          />
        </div>
        <div className="feeTable">
          <h1>School Fees for Year 2023/2024</h1>

          <table className="responsive">
            <thead>
              <tr>
                <th>FORM</th>
                <th>PER MONTH</th>
                <th>PER ANNUM</th>
                <th>
                  COMPUTER FEE <br /> (4 month)
                </th>
                <th>
                  EXAM FEE <br /> (half yearly & annual)
                </th>
                <th>
                  ANNUAL CHARGE <br /> (july)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="1)" className="head">
                  Nursery
                </td>
              </tr>
              <tr>
                <td data-label="CLASS">Play Group</td>
                <td data-label="PER MONTH">₹350</td>
                <td data-label="PER ANNUM">₹5150</td>
                <td data-label="COMPUTER FEE(4 month)"> ---</td>
                <td data-label="EXAM FEE (half yearly & annual)">
                  ₹450
                </td>
                <td data-label="ANNUAL CHARGE(july)">₹500</td>
              </tr>
              <tr>
                <td data-label="CLASS">Junior Nursery</td>
                <td data-label="PER MONTH">₹350</td>
                <td data-label="PER ANNUM">₹5150</td>
                <td data-label="COMPUTER FEE (4 month)">---</td>
                <td data-label="EXAM FEE (half yearly & annual)">
                  ₹450
                </td>
                <td data-label="ANNUAL CHARGE(july)">₹500</td>
              </tr>
              <tr>
                <td data-label="CLASS">Senior Nursery </td>
                <td data-label="PER MONTH">₹350</td>
                <td data-label="PER ANNUM">₹5150</td>
                <td data-label="COMPUTER FEE(4 month)">---</td>
                <td data-label="EXAM FEE(half yearly & annual)">₹450</td>
                <td data-label="ANNUAL CHARGE(july)">₹500</td>
              </tr>
              <tr>
                <td data-label="2)" className="head">
                  Primary School
                </td>
             
              </tr>
              <tr>
                <td data-label="CLASS">Class 1 </td>

                <td data-label="PER MONTH">₹350</td>
                <td data-label="PER ANNUM">₹5150</td>
                <td data-label="COMPUTER FEE(4 month)">---</td>
                <td data-label="EXAM FEE (half yearly & annual)">₹450</td>
                <td data-label="ANNUAL CHARGE(july)">₹500</td>
              </tr>
              <tr>
                <td data-label="CLASS">Class 2 </td>

                <td data-label="PER MONTH">₹350</td>
                <td data-label="PER ANNUM">₹5150</td>
                <td data-label="COMPUTER FEE(4 month)">---</td>
                <td data-label="EXAM FEE(half yearly & annual)">₹450</td>
                <td data-label="ANNUAL CHARGE(july)">₹500</td>
              </tr>
        
              <tr>
                <td data-label="CLASS">Class 3 </td>

                <td data-label="PER MONTH">₹350</td>
                <td data-label="PER ANNUM">₹5750</td>
                <td data-label="COMPUTER FEE(4 month)">₹600</td>
                <td data-label="EXAM FEE(half yearly & annual)">₹450</td>
                <td data-label="ANNUAL CHARGE(july)">₹500</td>
              </tr>
              <tr>
                <td data-label="CLASS">Class 4 </td>

                <td data-label="PER MONTH">₹350</td>
                <td data-label="PER ANNUM">₹5750</td>
                <td data-label="COMPUTER FEE(4 month)">₹600</td>
                <td data-label="EXAM FEE(half yearly & annual)">₹450</td>
                <td data-label="ANNUAL CHARGE(july)">₹500</td>
              </tr>
              <tr>
                <td data-label="CLASS">Class 5 </td>

                <td data-label="PER MONTH">₹350</td>
                <td data-label="PER ANNUM">₹5750</td>
                <td data-label="COMPUTER FEE(4 month)">₹500</td>
                <td data-label="EXAM FEE(half yearly & annual)">₹450</td>
                <td data-label="ANNUAL CHARGE(july)">₹500</td>
              </tr>
              <tr>
                <td data-label="3)" className="head">
                  Middle School
                </td>
              
              </tr>
           
              <tr>
                <td data-label="CLASS">Class 6 </td>

                <td data-label="PER MONTH">₹400</td>
                <td data-label="PER ANNUM">₹6450</td>
                <td data-label="COMPUTER FEE(4 month)">₹700</td>
                <td data-label="EXAM FEE (half yearly & annual)">₹450</td>
                <td data-label="ANNUAL CHARGE(july)">₹500</td>
              </tr>
              <tr>
                <td data-label="CLASS">Class 7 </td>

                <td data-label="PER MONTH">₹400</td>
                <td data-label="PER ANNUM">₹6450</td>
                <td data-label="COMPUTER FEE (4 month)">₹700</td>
                <td data-label="EXAM FEE(half yearly & annual)">₹450</td>
                <td data-label="ANNUAL CHARGE(july)">₹500</td>
              </tr>
              <tr>
                <td data-label="CLASS">Class 8 </td>

                <td data-label="PER MONTH" >₹400</td>
                <td data-label="PER ANNUM">₹6450</td>
                <td data-label="COMPUTER FEE(4 month)">₹700</td>
                <td data-label="EXAM FEE(half yearly & annual)">₹450</td>
                <td data-label="ANNUAL CHARGE(july)">₹500</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="uniform">
          <h1>Uniforms</h1>

          <hr className="feesLine" />
          <h2>Everyday Uniform</h2>
          <div className="uniformList">
            <h2>SHIRTS</h2>
            <ol>
              <li>Creme shirt (must be tucked in) </li>
              <li>Blue Shirt (Wed, Sat) </li>
            </ol>
            <h2>SKIRTS/PANTS</h2>
            <ol>
              <li>Check skirt/ blue or grey pant </li>
              <li>White skirt/ white pant (Wed, Sat) </li>
            </ol>
            <h2>SWEATERS / JACKETS</h2>
            <ol>
              <li>Grey sweater with divine logo (crewneck or cardigan) OR</li>
              <li>Navy jacket  </li>
            </ol>
            <h2>TIGHTS / LEGGINGS</h2>
            <ol>
              <li>Black leggings</li>
              <li>White leggings (Wed, Sat)</li>
            </ol>
            <h2>SOCKS</h2>
            <ol>
              <li>white socks </li>
             
            </ol>
            <h2>SHOES</h2>
            <ol>
              <li>Black Shoes</li>
              <li>White Shoes (Wed, Sat)</li>
            </ol>
          </div>
        </div>
      </div>
      {/* <VisitCard /> */}
      <Footer />
    </motion.div>
  );
};

export default Fees;
