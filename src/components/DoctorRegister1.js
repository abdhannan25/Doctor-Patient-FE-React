import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/pc_logo.png";
import "./DoctorRegister1.css";

export default function DoctorRegister1() {
  const [img, setImg] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [data, setData] = useState({
    fname: "",
    lname: "",
    gender: "",
    phoneNum: "",
    cnic: "",
    formErrors: {},
  });

  const { fname, lname, gender, phoneNum, cnic } = data;

  useEffect(() => {
    if (img.length < 1) return;
    const newImgUrl = [];
    img.forEach((image) => newImgUrl.push(URL.createObjectURL(image)));
    setImageUrl(newImgUrl);
  }, [img]);

  function onImageChange(e) {
    setImg([...e.target.files]);
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleFormValidation()) {    
        alert('You have been successfully registered.') 
        console.log(data);    
        window.location = '/DoctorRegister';    
    }
    console.log(data);
  };

  function uploadFiles(){
    document.getElementById('image').click();
  }

  function handleFormValidation(){    
    const { fname,lname,gender,phoneNum,cnic} = data;    
    let formErrors = {};    
    let formIsValid = true;    

    //Student name     
    if (!fname) {    
        formIsValid = false;    
        formErrors["firstNameErr"] = "*firstName is required.";    
    }

    if (!lname) {    
      formIsValid = false;    
      formErrors["lastNameErr"] = "*lastName is required.";    
  }

  if (!gender) {    
    formIsValid = false;    
    formErrors["genderErr"] = "*gender is required.";    
  }

  if (!phoneNum) {    
    formIsValid = false;    
    formErrors["phoneNumErr"] = "*PhoneNum is required.";    
  }

  if (!cnic) {    
    formIsValid = false;    
    formErrors["cnicErr"] = "*cnic is required.";    
  }


    setData({ formErrors: formErrors });    
    return formIsValid; 
  }
  const {
    firstNameErr,
    lastNameErr,
    genderErr,
    phoneNumErr,
    cnicErr,
  } = data.formErrors;

  return (
    <div className="body1">
      <div>
        <Link to="/LandingPage">
          <img src={logo} className="logo ms-4 mt-3" alt="..." />
        </Link>
      </div>
      <div className="register-form">
        <h4 className="mt-2 fw-bold text-black mb-3 text-center">
          Basic Information
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="row rows">
            <div className="col-12 image-upload">
              <div className="image-show">
                <img src={imageUrl} className="image"/>
              </div>
              <div className="add-image">
                <button onClick={uploadFiles} className="file">Add Photo</button>
                <input type="file" style={{display:"none"}} onChange={onImageChange} id="image"/>
              </div>
            </div>
            <div className="col-12 mt-1">
              <div className="row ">
                <div className="col-12">
                  <label className="label" htmlFor="fname">
                    First Name
                  </label>
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    name="fname"
                    value={fname}
                    onChange={handleChange}
                    className={firstNameErr ? " showError" : ""}
                    id="fname"
                  />
                  {firstNameErr &&    
                                <div style={{ color: "red",fontSize:"15px",height : "12px" }}>{firstNameErr}</div>    
                }
                </div>
              </div>
            </div>
            <div className="col-12 mt-1">
                <div className="row ">
                    <div className="col-12">
                    <label className="label" htmlFor="lname">
                        Last Name
                    </label>
                    </div>
                    <div className="col-12">
                    <input
                        type="text"
                        name="lname"
                        value={lname}
                        onChange={handleChange}
                        className={lastNameErr ? " showError" : ""}
                        id="lname"
                    />
                    {lastNameErr &&    
                                    <div style={{ color: "red",fontSize:"15px", height : "10px" }}>{lastNameErr}</div>    
                    }
                    </div>
                </div>
            </div>
            <div className="col-12 mt-1">
                <div className='row '>
                            <div className='col-12'><label className="label" htmlFor="gender">Gender</label></div>
                            <div className='col-12'>
                                <select name="gender" onChange={handleChange}    
                                    className={genderErr ? ' showError' : ''}    
                                    value={gender}
                                    id="gender" >    
                                    <option value="select">--Select--</option>    
                                    <option value="gender1">Male</option>    
                                    <option value="gender2">Female</option>        
                                </select>  
                                {genderErr &&    
                                    <div style={{ color: "red",fontSize:"15px", height : "10px" }}>{genderErr}</div>    
                                }
                            </div>
                </div>
            </div>
            <div className="col-12 mt-1">
            <div className='row '>
                                <div className='col-12'><label className="label" htmlFor="phoneNum">Phone Number</label></div>
                                <div className='col-12'>
                                    <input type="numbers" name="phoneNum"    
                                        value={phoneNum}    
                                        onChange={handleChange}   
                                        placeholder="xxxx-xxxxxxx"    
                                        className={phoneNumErr ? ' showError' : ''}
                                        id="phnum" />    
                                    {phoneNumErr &&    
                                        <div style={{ color: "red",fontSize:"15px", height : "10px" }}>{phoneNumErr}</div>    
                                    }
                                </div>
                            </div>
            </div>
            <div className="col-12 mt-1">
            <div className='row '>
                                <div className='col-12'><label className="label" htmlFor="cnic">CNIC</label></div>
                                <div className='col-12'>
                                    <input type="numbers" name="cnic"    
                                        value={cnic}    
                                        onChange={handleChange}   
                                        placeholder="xxxx-xxxxxxx"    
                                        className={cnicErr ? ' showError' : ''}
                                        id="cnic" />    
                                    {cnicErr &&    
                                        <div style={{ color: "red",fontSize:"15px", height : "10px" }}>{cnicErr}</div>    
                                    }
                                </div>
                            </div>
            </div>
            <div className="col-12 mt-3">
              <input type="submit" className="text-center next-btn text-light fw-bold" name="submit" value={"Next"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
