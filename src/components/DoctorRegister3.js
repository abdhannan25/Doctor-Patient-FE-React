import React from "react";
import { useState, useEffect } from "react";
import logo from "../images/pc_logo.png";
import { Link } from "react-router-dom";
import mastercard from "../images/mastercard.png";
import visa from "../images/visa.png";
import easypaisa from "../images/easypaisa.png";
import jazzcash from "../images/jazzcash.png";
import "./DoctorRegister3.css";

export default function DoctorRegister3() {
  const [data, setData] = useState({
    fee: {
      onlineFee: "",
      hospitalFee: "",
      homeFee: "",
    },
    cardNum: "",
    easypaisaNum: "",
    jazzcashNum: "",
    formErrors: {},
  });

  const { fee, cardNum, easypaisaNum, jazzcashNum } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleFormValidation()) {
      alert("You have been successfully registered.");
      console.log(data);
      window.location = "/DoctorLogin";
    }
    console.log(data);
  };

  function handleFormValidation() {
    const { fname, lname, gender, phoneNum, cnic } = data;
    let formErrors = {};
    let formIsValid = true;

    //Student name
    if (!cardNum) {
      formIsValid = false;
      formErrors["cardNumErr"] = "*CardNum is required.";
    }

    if (!easypaisaNum) {
      formIsValid = false;
      formErrors["easypaisaNumErr"] = "*Easypaisa number is required.";
    }

    if (!jazzcashNum) {
      formIsValid = false;
      formErrors["jazzcashNumErr"] = "*jazzcash number is required.";
    }

    setData({ formErrors: formErrors });
    return formIsValid;
  }

  const {
    feeErr,
    cardNumErr,
    easypaisaNumErr,
    jazzcashNumErr,
    x,
  } = data.formErrors;

  return (
    <div className="body1">
      <div>
        <Link to="/LandingPage">
          <img src={logo} className="logo ms-4 mt-3" alt="..." />
        </Link>
      </div>
      <div className="payment-form">
        <h4 className="mt-4 fw-bold text-black mb-3 text-center">
          Payment Information
        </h4>

        <form>
          <div className="row fee-input mt-4">
            <div className="col-12">
              <label className="label" htmlFor="fee" placeholder="">
                Appointment Fee
              </label>
            </div>
            <div className="col-12 mt-1">
              <div className="row">
                <div className="col-4">
                  <input
                    type="numbers"
                    name="onlineFee"
                    placeholder="online fee"
                    value={fee.onlineFee}
                    onChange={handleChange}
                    className={feeErr ? " showError" : ""}
                    id="fee"
                  />
                  {feeErr && (
                    <div
                      style={{ color: "red", fontSize: "15px", height: "10px" }}
                    >
                      {feeErr}
                    </div>
                  )}
                </div>
                <div className="col-4">
                  <input
                    type="numbers"
                    name="hospitalFee"
                    placeholder="hospital fee"
                    value={fee.hospitalFee}
                    onChange={handleChange}
                    className={feeErr ? " showError" : ""}
                    id="fee"
                  />
                  {feeErr && (
                    <div
                      style={{ color: "red", fontSize: "15px", height: "10px" }}
                    >
                      {feeErr}
                    </div>
                  )}
                </div>
                <div className="col-4">
                  <input
                    type="numbers"
                    name="homeFee"
                    placeholder="home fee"
                    value={fee.homeFee}
                    onChange={handleChange}
                    className={feeErr ? " showError" : ""}
                    id="fee"
                  />
                  {feeErr && (
                    <div
                      style={{ color: "red", fontSize: "15px", height: "10px" }}
                    >
                      {feeErr}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row acc-form mt-5">
            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <label className="label" htmlFor="lname">
                    Credit/Debit card number
                  </label>
                </div>
                <div className="col-12">
                  <input
                    type="numbers"
                    name="cardNum"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    value={cardNum}
                    onChange={handleChange}
                    className={cardNumErr ? " showError" : ""}
                    id="acc-no"
                  />
                  {cardNumErr && (
                    <div
                      style={{ color: "red", fontSize: "15px", height: "10px" }}
                    >
                      {cardNumErr}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-6 ps-5">
              <div className="row">
                <div className="col-6 pt-3 ps-3">
                  <img src={visa} className="images" alt="..." />
                </div>
                <div className="col-6 ps-3">
                  <img src={mastercard} className="images" alt="..." />
                </div>
              </div>
            </div>
            <div className="col-6 mt-3">
              <div className="row">
                <div className="col-12">
                  <label className="label" htmlFor="lname">
                    Easy paisa number
                  </label>
                </div>
                <div className="col-12">
                  <input
                    type="numbers"
                    name="easypaisaNum"
                    placeholder="xxxx-xxxxxxx"
                    value={easypaisaNum}
                    onChange={handleChange}
                    className={easypaisaNumErr ? " showError" : ""}
                    id="acc-no"
                  />
                  {easypaisaNumErr && (
                    <div
                      style={{ color: "red", fontSize: "15px", height: "10px" }}
                    >
                      {easypaisaNumErr}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-6 mt-3 ps-5">
              <img src={easypaisa} className="images pt-2" alt="..." />
            </div>
            <div className="col-6 mt-3">
              <div className="row">
                <div className="col-12">
                  <label className="label" htmlFor="lname">
                    JazzCash number
                  </label>
                </div>
                <div className="col-12">
                  <input
                    type="numbers"
                    name="jazzcashNum"
                    placeholder="xxxx-xxxxxxx"
                    value={jazzcashNum}
                    onChange={handleChange}
                    className={jazzcashNumErr ? " showError" : ""}
                    id="acc-no"
                  />{" "}
                  {jazzcashNumErr && (
                    <div
                      style={{ color: "red", fontSize: "15px", height: "10px" }}
                    >
                      {jazzcashNumErr}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-6 mt-3 ps-5">
              <img src={jazzcash} className="images" alt="..." />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
                <Link to="/DoctorLogin">
                <input type="submit" className="text-center next-btn text-light fw-bold" name="submit" value={"Save Info"} />
                </Link>
            </div>
            <div className="col-6">
            <Link to="/DoctorLogin">
                <button type="button" className="button btn-dark ms-3">
                I am Doctor
            </button>
                </Link>
            </div>
        </div>
        </form>
        
      </div>
    </div>
  );
}
