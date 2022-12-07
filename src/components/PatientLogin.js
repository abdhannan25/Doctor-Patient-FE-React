import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/pc_logo.png";
import "./PatientLogin.css";

export default function PatientLogin() {
    const [data, setData] = useState({
        emailId: "",    
        password:"", 
        formErrors: {},
      });

      const { emailId, password } = data;

      const handleChange = (e) => {
        setData({ ...data, [e.target.name]: [e.target.value] });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (handleFormValidation()) {    
            alert('You have been successfully registered.') 
            console.log(data);    
            window.location = '/PatientLogin';    
        }
        console.log(data);
      };

      function handleFormValidation(){    
        const { emailId, password} = data;    
        let formErrors = {};    
        let formIsValid = true;    
    
        if (!password) {    
            formIsValid = false;    
            formErrors["passwordErr"] = "*Password is required.";    
        } 
        else if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/.test(password))){
            formIsValid = false;    
            formErrors["passwordErr"] = "*Password must be 8 characters long.";

        }   
    
        //Email    
        if (!emailId) {    
            formIsValid = false;    
            formErrors["emailIdErr"] = "*Email id is required.";    
        }    
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId))) {    
    
            formIsValid = false;    
            formErrors["emailIdErr"] = "*Invalid email id.";    
        }
    
    
        setData({ formErrors: formErrors });    
        return formIsValid; 
      }

      const {
        emailIdErr,
        passwordErr,
      } = data.formErrors;
  return (
    <div className='body1'>
            <div  >
            <Link to='/LandingPage'>
                <img src={logo} className="logo ms-4 mt-3" alt="..." />            
            </Link>            
            </div>
            <div className='login-form'>
                <h4 className='mt-4 fw-bold text-black mb-4 text-center'>Patient Login</h4>
                <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-12'>
                        <div className='row '>
                            <div className='col-12'><label className="label" htmlFor="emailId">Email Id</label></div>
                            <div className='col-12'>
                                <input type="text" name="emailId"    
                                    value={emailId}    
                                    onChange={handleChange}   
                                    placeholder="Your email id.."    
                                    className={emailIdErr ? ' showError' : ''}
                                    id="email" />    
                                {emailIdErr &&    
                                    <div style={{ color: "red", paddingBottom: 10 }}>{emailIdErr}</div>    
                                }
                            </div>
                        </div>
                            
                            
                    </div>
                    <div className='col-12 mt-2'>
                    <div className='row'>
                            <div className='col-12'><label className="label" htmlFor="password">Password</label></div>
                            <div className='col-12'>
                                <input type="password" name="password"    
                                    value={password}    
                                    onChange={handleChange}   
                                    placeholder="Enter your Password"    
                                    className={passwordErr ? ' showError' : ''}
                                    id="password" />    
                                {passwordErr &&    
                                    <div style={{ color: "red", paddingBottom: 10 }}>{passwordErr}</div>    
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='forget mt-1'>Forgot your password?</div>
                <div className='text-center'><input className='submit mt-4 text-light fw-bolder' type="submit" value="Login" /></div>
                </form>
                
                <div className='row mt-2'>
                <div className='col-6 signup1 text-center'>
                    Don't have an account?
                </div>
                <Link to="/PatientSignup" className='col-6 signup2 fw-bold text-black'>
                    <div >Create a new account</div>
                </Link></div>
            </div>
        
        </div>
  )
}
