import React, { useState } from "react";
import { Link } from "react-router-dom";

import BreadCrumb from '../components/BreadCrumb';

import '../assets/styles/Login.css';
import image from '../assets/images/image 5.png'

function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleLogin = async () => {
        if(email === "test" && password === "test"){
            localStorage.setItem('loggedIn', "true")
            localStorage.setItem('username', "eieronymakis")
        }
    }

    return(
        <div className="login">
            <BreadCrumb                 
                items={[{"path":"/register","label":"Εγγραφή"}, {"path":"/register-success", label:"Επιτυχία"}]}>
            </BreadCrumb>
            <div className="ms-auto me-auto mt-3 login-container d-flex">
                <div className="left">
                        <img className="image-hover" alt="" src={image}></img>
                        <div className="create-account-container">
                            <div className="text-light w-100 text-center fw-bold new-customer">
                                🥳 Επιτυχής Εγγραφή
                            </div>
                            <div className="mt-3 text-warning w-50 text-center fw-bold fs-5 ms-auto me-auto">
                                Ευχαριστούμε για την εγγραφή σας στο VisionStudio
                            </div>
                        </div>
                </div>
                <div className="right d-flex align-items-center justify-content-center">
                    <Link to="/login" className="register-success-login btn btn-lg fs-1 border border-5 border-light">
                        <i class="bi bi-person-arms-up me-3"></i>
                        Σύνδεση
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;