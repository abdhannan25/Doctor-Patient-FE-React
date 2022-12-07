import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Emergency from './components/Emergency';
import PatientLogin from './components/PatientLogin';
import DoctorLogin from './components/DoctorLogin';
import DoctorSignup from './components/DoctorSignup';
import PatientSignup from './components/PatientSignup';
import PatientRegister from './components/PatientRegister';
import DoctorRegister1 from './components/DoctorRegister1';
import DoctorRegister3 from './components/DoctorRegister3';

function App() {
  return (
    <BrowserRouter>      
      <Routes>
        <Route exact path="/" element={<LandingPage/>}></Route>
        <Route exact path="/LandingPage" element={<LandingPage/>}></Route>
        <Route exact path="/Emergency" element={<Emergency/>}></Route>
        <Route exact path="/PatientLogin" element={<PatientLogin/>}></Route>
        <Route exact path="/DoctorLogin" element={<DoctorLogin/>}></Route>
        <Route exact path="/DoctorSignup" element={<DoctorSignup/>}></Route>
        <Route exact path="/PatientSignup" element={<PatientSignup/>}></Route>
        <Route exact path="/PatientRegister" element={<PatientRegister/>}></Route>
        <Route exact path="/DoctorRegister1" element={<DoctorRegister1/>}></Route>
        <Route exact path="/DoctorRegister3" element={<DoctorRegister3/>}></Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
