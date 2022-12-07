import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/pc_logo.png";
import { MdAddCircle } from "react-icons/md";
import "./PatientRegister.css";

export default function PatientRegister() {
    const [file, setFile] = useState([]);
    const [fileUrl, setFileUrl] = useState([]);
    const [data, setData] = useState({
        firstName: '',    
        lastName: '',
        gender:'',
        dob:'',
        phoneNum:'',
        email:'',
        age:'',
        weight: '',
        height: '',
        report:'',
        formErrors: {},
      });

      useEffect(() => {
        if (file.length < 1) return;
        const newFileUrl = [];
        file.forEach((file) => newFileUrl.push(URL.createObjectURL(file)));
        setFileUrl(newFileUrl);
      }, [file]);
    
      function onFileChange(e) {
        setFile([...e.target.files]);
      }

      function uploadFiles(){
        document.getElementById('select-file').click();
      }

      const { firstName,lastName,gender,dob, phoneNum, email, age,weight, height } = data;

      function handleFormValidation(){    
        const { firstName,lastName,gender,dob, phoneNum, email, age,weight, height} = data;    
        let formErrors = {};    
        let formIsValid = true;    
    
         //Student name     
         if (!firstName) {    
            formIsValid = false;    
            formErrors["firstNameErr"] = "*firstName is required.";    
        }    
        
        //Student name     
        if (!lastName) {    
            formIsValid = false;    
            formErrors["lastNameErr"] = "*lastName is required.";    
        }    
        
        //Phone Num     
        if (!phoneNum) {    
            formIsValid = false;    
            formErrors["phoneNumErr"] = "*PhoneNum is required.";    
        } 

        //Email    
        if (!email) {    
            formIsValid = false;    
            formErrors["emailErr"] = "*Email id is required.";    
        }    
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {    
    
            formIsValid = false;    
            formErrors["emailErr"] = "*Invalid email id.";    
        }    
    
        //DOB    
        if (!dob) {    
            formIsValid = false;    
            formErrors["dobErr"] = "*Date of birth is required.";    
        }    
        else {    
            var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;    
            if (!pattern.test(dob)) {    
                formIsValid = false;    
                formErrors["dobErr"] = "*Invalid date of birth";    
            }    
        }    
    
        //Gender    
        if (gender === '' || age === "select" ) {    
            formIsValid = false;    
            formErrors["genderErr"] = "*Select gender.";    
        }    
    
           
    
        //Age    
        if (age === '' || age === "select") {    
            formIsValid = false;    
            formErrors["ageErr"] = "*Select age.";    
        }    
        
        //weight   
        if (weight === '' || weight === "select") {    
            formIsValid = false;    
            formErrors["weightErr"] = "*Select weight.";    
        }

        //height   
        if (height === '' || height === "select") {    
            formIsValid = false;    
            formErrors["heightErr"] = "*Select height.";    
        }

    
        setData({ formErrors: formErrors });    
        return formIsValid; 
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

      const {firstNameErr, lastNameErr, genderErr, dobErr, phoneNumErr, ageErr, weightErr, heightErr, emailErr} = data.formErrors;

  return (
    <div className='body1'>
        <div>
            <Link to='/LandingPage'>
                <img src={logo} className="logo ms-4 mt-3" alt="..." />            
            </Link>           
        </div>

        <div className='register-form '>
            <h4 className='mt-4 fw-bold text-black mb-4 text-center'>Basic Information</h4>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-6'>
                    <div className='row '>
                                <div className='col-12'><label className="label" htmlFor="firstName">First Name</label></div>
                                <div className='col-12'>
                                    
                            <input type="text" name="firstName"    
                                value={firstName}    
                                onChange={handleChange}   
                                placeholder="Your name.."    
                                className={firstNameErr ? ' showError' : ''} 
                                id="fname"/>    
                            {firstNameErr &&    
                                <div style={{ color: "red",height : "10px" }}>{firstNameErr}</div>    
                            }
                                </div>
                    </div>
                    </div>
                    <div className='col-6'>
                    <div className='row '>
                                <div className='col-12'><label className="label" htmlFor="lastName">Last Name</label></div>
                                <div className='col-12'>
                                    
                            <input type="text" name="lastName"    
                                value={lastName}    
                                onChange={handleChange}   
                                placeholder="Your name.."    
                                className={lastNameErr ? ' showError' : ''} 
                                id="lname"/>    
                            {lastNameErr &&    
                                <div style={{ color: "red",height : "10px" }}>{lastNameErr}</div>    
                            }
                                </div>
                    </div>
                    </div>
                    <div className='col-6 mt-3'>
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
                                <div style={{ color: "red",height : "10px" }}>{genderErr}</div>    
                            }
                            </div>
                    </div>
                    </div>                     
                    <div className='col-6 mt-3'>
                    <div className='row '>
                                <div className='col-12'><label className="label" htmlFor="text">Date of Birth</label></div>
                                <div className='col-12'>
                                    
                            <input type="text" name="dob"    
                                value={dob}    
                                onChange={handleChange}    
                                placeholder="dd/mm/yyyy.."    
                                className={dobErr ? ' showError' : ''}
                                id="dob" />    
                            {dobErr &&    
                                <div style={{ color: "red",height : "10px" }}>{dobErr}</div>    
                            } 
                                </div>
                            </div>

                    </div>
                    <div className='col-6 mt-3'>
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
                                        <div style={{ color: "red",height : "10px" }}>{phoneNumErr}</div>    
                                    }
                                </div>
                            </div>
                    </div>
                    <div className='col-6 mt-3'>
                        <div className='row '>
                                <div className='col-12'><label className="label" htmlFor="email">Email Id</label></div>
                                <div className='col-12'>
                                    <input type="text" name="email"    
                                        value={email}    
                                        onChange={handleChange}   
                                        placeholder="Your email id.."    
                                        className={emailErr ? ' showError' : ''}
                                        id="email" />    
                                    {emailErr &&    
                                        <div style={{ color: "red",height : "10px" }}>{emailErr}</div>    
                                    }
                                </div>
                            </div>
                    </div>
                    <div className='col-6 mt-3'>
                        <div className="row">
                            <div className="col-4">
                            <div className='row '>
                                <div className='col-12'><label className="label" htmlFor="age">Age</label></div>
                                <div className='col-12'>
                                <select name="age" onChange={handleChange}    
                                    className={ageErr ? ' showError' : ''}    
                                    value={age}
                                    id="age" >    
                                    <option value="select">Select</option>    
                                    <option value="age1">20-25 yrs</option>    
                                    <option value="age2">26-30 yrs</option>    
                                    <option value="age3">31-35 yrs</option>
                                    <option value="age4">36-40 yrs</option>
                                    <option value="age5">41-45 yrs</option>    
                                </select>  
                            {ageErr &&    
                                <div style={{ color: "red",height : "10px" }}>{ageErr}</div>    
                            }
                                </div>
                            </div>
                            </div>
                            <div className="col-4">
                            <div className='row '>
                                <div className='col-12'><label className="label" htmlFor="age">Weight</label></div>
                                <div className='col-12'>
                                <select name="weight" onChange={handleChange}    
                                    className={weightErr ? ' showError' : ''} 
                                    placeholder="Your email id.."   
                                    value={weight}
                                    id="weight" >    
                                    <option value="select">Select</option>    
                                    <option value="weight1">40-45 kg</option>    
                                    <option value="weight2">46-50 kg</option>    
                                    <option value="weight3">50-55 kg</option>
                                    <option value="weight4">56-60 kg</option>
                                    <option value="weight5">61-65 kg</option>    
                                </select>  
                            {weightErr &&    
                                <div style={{ color: "red",height : "10px" }}>{weightErr}</div>    
                            }
                                </div>
                                </div>
                            </div>
                            <div className="col-4">
                            <div className='row '>
                                <div className='col-12'><label className="label" htmlFor="age">Height</label></div>
                                <div className='col-12'>
                                <select name="height" onChange={handleChange}    
                                    className={heightErr ? ' showError' : ''}    
                                    value={height}
                                    id="height" >    
                                    <option value="select">Select</option>    
                                    <option value="height1">160-165 cm</option>    
                                    <option value="height2">166-170 cm</option>    
                                    <option value="height3">171-175 cm</option>
                                    <option value="height4">176-180 cm</option>
                                    <option value="height5">181-185 cm</option>    
                                </select>  
                            {heightErr &&    
                                <div style={{ color: "red",height : "10px" }}>{heightErr}</div>    
                            }
                                </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='col-6 mt-5 '>
                    <div className="input-group report fw-bold text-black">
                        Add your existing medical report
                        <button onClick={uploadFiles} className="file"><MdAddCircle/></button>
                        <input type="file" style={{display:"none"}} onChange={onFileChange} className="form-control" id="select-file"/>                        
                        </div>
                    </div>
                </div>
                <div className='mt-4 save'><input className='submit mt-4 text-light fw-bolder' type="submit" value="Save info" /></div>
            </form>
        </div>                                      
      </div>
)
}
