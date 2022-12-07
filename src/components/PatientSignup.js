import React from 'react'
import { useState} from "react";
import { Link } from "react-router-dom";
import logo from "../images/pc_logo.png";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import "./PatientSignup.css";

export default function PatientSignup() {
    const [data, setData] = useState({
        userName:'',        
        emailId: '',    
        password:'',
        confirmPassword:'',   
        formErrors: {}
    });

    const { userName, emailId, password,confirmPassword } = data;

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: [e.target.value] });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (handleFormValidation()) {    
            alert('You have been successfully registered.') 
            console.log(data);    
            window.location = '/PatientRegister';    
        }
        console.log(data);
      };

      function handleFormValidation(){    
        const { userName, emailId, password,confirmPassword} = data;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //Username     
        if (!userName) {    
            formIsValid = false;    
            formErrors["userNameErr"] = "*Username is required.";    
        }    

        //Password    
        if (!password) {    
            formIsValid = false;    
            formErrors["passwordErr"] = "*Password is required.";    
        }
        else if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/.test(password))){
            formIsValid = false;    
            formErrors["passwordErr"] = "*Password must be 8 characters long.";

        }
        
        //Password    
        if (!confirmPassword) {    
            formIsValid = false;    
            formErrors["confirmPasswordErr"] = "*Password is required.";    
        } 
        else if(!(confirmPassword === password)){
            formIsValid = false;
            formErrors["confirmPasswordErr"] = "*Passwords are not same.";
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

      const { userNameErr, emailIdErr, passwordErr,confirmPasswordErr} = data.formErrors;


  return (
    <div className='body1'>
        <div>
            <Link to='/LandingPage'>
                <img src={logo} className="logo ms-4 mt-3" alt="..." />            
            </Link>           
        </div>
        <div className='signup-form'>
        <div class="d-flex flex-row mb-3">
            <div className='form mt-3 p-2 ps-5 pe-5'>
                <h4 className='mt-4 fw-bold text-black mb-4 text-center'>Patient SignUp</h4>
                <form onSubmit={handleSubmit}>
                <div className='row'>
                <div className='col-12 '>
                        <div className='row text-left'>
                            <div className='col-12'><label className="label" htmlFor="userName">Username</label></div>
                            <div className='col-12'>
                                <input type="text" name="userName"    
                                    value={userName}    
                                    onChange={handleChange}   
                                    placeholder="Enter Username..."    
                                    className={userNameErr ? ' showError' : ''}
                                    id="username" />    
                                {userNameErr &&    
                                    <div style={{ color: "red" }}>{userNameErr}</div>    
                                }
                            </div>
                        </div>
                            
                            
                    </div>

                    <div className='col-12 mt-2'>
                        <div className='row text-left'>
                            <div className='col-12'><label className="label " htmlFor="emailId">Email Id</label></div>
                            <div className='col-12'>
                                <input type="text" name="emailId"    
                                    value={emailId}    
                                    onChange={handleChange}   
                                    placeholder="you@example.com"    
                                    className={emailIdErr ? ' showError' : ''}
                                    id="email" />    
                                {emailIdErr &&    
                                    <div style={{ color: "red" }}>{emailIdErr}</div>    
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
                                    placeholder="Enter your Password..."    
                                    className={passwordErr ? ' showError' : ''}
                                    id="password" />    
                                {passwordErr &&    
                                    <div style={{ color: "red", paddingBottom: 5 }}>{passwordErr}</div>    
                                }
                            </div>
                        </div>
                    </div>
                    <div className='col-12 mt-2'>
                    <div className='row'>
                            <div className='col-12'><label className="label" htmlFor="confirmPassword">Confirm Password</label></div>
                            <div className='col-12'>
                                <input type="password" name="confirmPassword"    
                                    value={confirmPassword}    
                                    onChange={handleChange}   
                                    placeholder="Confirm your Password..."    
                                    className={confirmPasswordErr ? ' showError' : ''}
                                    id="password" />    
                                {confirmPasswordErr &&    
                                    <div style={{ color: "red", paddingBottom: 5 }}>{confirmPasswordErr}</div>    
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center'><input className='submit mt-4 text-light fw-bolder' type="submit" value="SignUp" /></div>
                </form>
            </div>
            <div className='welcome text-center'>
                <h3 className='text-black mt-5 pt-5 ps-5 pe-5'>Find a doctor for you now!</h3>
                <p className='fw-bold mt-4 ps-5 pe-5 text-black '>We take the guesswork out of locating a doctor in your area for you and your family.</p>
                <div className='div1'>
                Already have an account? <Link to='/PatientLogin' className='fw-bold text-black'>Login</Link>
                </div>   
                <div className='div2'>
                Or continue with
                </div>
                <div className='div3'>
                <FaFacebookF/>       <FaGoogle/>
                </div>              
            </div>
            
        </div>                
        </div>
      </div>
  )
}
