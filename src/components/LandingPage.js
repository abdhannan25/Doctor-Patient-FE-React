import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/pc_logo.png";
import img1 from "../images/carousel_picture1.png";
import img2 from "../images/carousel_picture2.png";
import img3 from "../images/carousel_picture3.png";
import about from "../images/about_us.png";
import { HiUserGroup } from "react-icons/hi";
import {
  FaHome,
  FaHospitalAlt,
  FaFacebookF,
  FaInstagramSquare,
  FaTwitter,
  FaStethoscope,
} from "react-icons/fa";
import { TbDeviceMobile } from "react-icons/tb";
import { IoLogoWhatsapp } from "react-icons/io";
import "./LandingPage.css";

export default function LandingPage() {
  const [showMe, setShowMe] = useState("true");

  return (
    <div className="body">
      <nav className="navbar container">
        <img src={logo} className="logo" alt="logo" />
        <div className="Menu">
          <ul className="navbar-nav Menu-items">
            <li className="nav-item">
              <Link className="nav-link text-dark " to="/LandingPage">
                Our Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark " to="/LandingPage">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/PatientLogin">
          <button type="button" className="button btn-dark ms-3">
            I am Patient
          </button></Link>
          <Link to="/DoctorLogin">
          <button type="button" className="button btn-dark ms-3">
            I am Doctor
          </button></Link>
        </div>
      </nav>
      
      <div className="carousel">
       
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="..." />
                
              <div className="carousel-caption d-none d-md-block ">
              <div className="emergency-main">
                <button onClick={() => setShowMe(!showMe)} className="E-button text-light mb-1">Emergency</button>
                  {
                      showMe?
                      <div className='emergency'>
                        <div className='contact text-light ms-3'>
                          Contact for emergency!
                        </div>
                        <div className='num text-light fw-bold text-center mt-1'>
                          0123-4567891
                        </div>
                        
                      </div>
                      :null
                    }
              </div>
                <h5>Patient Care</h5>
                <p>Improving the lives of our patients and their families</p>
              </div>
            </div>
            
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block ">
                <h5>Patient Care</h5>
                <p>Improving the lives of our patients and their families</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Patient Care</h5>
                <p>Improving the lives of our patients and their families</p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div>
      
      </div>
      <div className="container text-center support">
        <div className="row mt-5">
          <div className=" col f1">
            <div className="support-icons">
              <FaStethoscope />
            </div>
            <div>100+</div>
            <div>Doctors at Work</div>
          </div>
          <div className=" col f2 ms-5">
            <div className="support-icons">
              <HiUserGroup />
            </div>
            <div>500+</div>
            <div>Happy Patients</div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <h3 className="fw-bold">Our Services</h3>
        <div className="support ">
          <div className="container row mt-5">
            <div className="col-md-4">
              <div className="card service" style={{ width: "18rem" }}>
                <div className="card-body">
                  <FaHome size={"5em"} color={"black"} />
                  <h5 className="card-title fw-bold mt-4">Home Appointment</h5>
                  <p className="card-text">
                    Medical service right at the comfort of your home
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <TbDeviceMobile size={"5em"} color={"black"} />
                  <h5 className="card-title fw-bold mt-4">
                    Online Appointment
                  </h5>
                  <p className="card-text">
                    With our provided database your appointment is a click away
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <FaHospitalAlt size={"5em"} color={"black"} />
                  <h5 className="card-title fw-bold mt-4">
                    Hospital Appointment
                  </h5>
                  <p className="card-text">
                    With appointments already inorder, have a hassle free
                    experience at the hospital
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about text-center mt-5">
        <h3 className="fw-bold">About Us</h3>
        <div className="support">
          <div className="row mt-5">
            <div className="col-md-6 about_img">
              <img src={about} className="d-block w-100" alt="..." />
            </div>
            <div className="col-md-6 about_div">
              <div className="mt-5">
                Patient Care is an online medical service for finding a doctor
                and making an appointment without leaving home.
              </div>
              <div className="mt-5 pt-5 ">
                <FaFacebookF color={"black"} />
                <FaInstagramSquare className="ms-3" color={"black"} />
                <FaTwitter className="ms-3" color={"black"} />
                <IoLogoWhatsapp className="ms-3" color={"black"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "100px" }}></div>      
    </div>
  );
}
