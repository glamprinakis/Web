import React, { useState } from "react";
import { Link } from "react-router-dom";

import BreadCrumb from '../components/BreadCrumb';

import '../assets/styles/Login.css';
import image from '../assets/images/image 5.png'
import {jwtDecode} from "jwt-decode";

function Login(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [alert, setAlert] = useState(false)
    
    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleLogin = async () => {

        const data = {usr:username, pwd:password}
        try {
            const response = await fetch("http://localhost:3005/user/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
            if(response.status == 401){
                setAlert(true)
            }else{
                const result = await response.json();
                let token = result.token;
                let tokenData = jwtDecode(token);
                localStorage.setItem('username', tokenData.userName)
                localStorage.setItem('userId', tokenData.userId)
                window.location.href = "/";
            }
          } catch (error) {
            console.error("Error:", error);
          }
    }



    return(
        <div className="login">
            <BreadCrumb                 
                items={[{"path":"/login","label":"Σύνδεση"}]}>
            </BreadCrumb>
            {alert &&
                <div class="alert alert-danger d-flex align-items-center w-50 ms-auto me-auto mt-2" role="alert">
                    <i class="bi bi-exclamation-triangle me-5"></i>
                    <div>
                        Παρακαλώ ελέγξτε τα στοιχεία εισόδου και ξαναπροσπαθήστε
                    </div>
                </div>
            }
            <div className="ms-auto me-auto mt-3 login-container d-flex">
                <div className="left">
                        <img className="image-hover" alt="" src={image}></img>
                        <div className="create-account-container">
                            <div className="text-light w-100 text-center fw-bold new-customer">
                                Νέος Χρήστης ;
                            </div>
                            <div className="mt-3 text-warning w-50 text-center fw-bold fs-5 ms-auto me-auto">
                                Πατήστε παρακάτω για να φτιάξετε νέο λογαριασμό
                            </div>
                            <div className="mt-5 text-light text-center fw-bold fs-5 ms-auto me-auto w-100 d-flex align-items-center justify-content-center">
                                <Link className="register-btn" to="/register">
                                    Δημιουργία λογαριασμού
                                </Link>
                            </div>
                        </div>
                        <div className="back text-light w-50 text-center fw-bold fs-5 ms-5">
                            <Link to="/" className="back-btn d-flex align-items-center">
                                <i className="bi bi-arrow-left-square-fill"></i>
                                <span className="ms-3">Πίσω</span>
                            </Link>
                        </div>

                </div>
                <div className="right d-flex align-items-center justify-content-center">
                    <div className="login-form bg-body">
                        <div className="mt-5 w-100 text-center fw-bold fs-3">
                            Έχετε ήδη λογαριασμό ;
                        </div>
                        <div className="w-100 d-flex justify-content-center mt-4">
                            <input onChange={handleChangeUsername} value={username} id="login-username" type="text" placeholder="Username"></input>
                        </div>
                        <div className="w-100 d-flex justify-content-center mt-3">
                            <input onChange={handleChangePassword} value={password} id="login-password" type="password" placeholder="Password"></input>
                        </div>
                        <div className="w-100 d-flex justify-content-center mt-4">
                            <button onClick={handleLogin} className="fw-bold login-btn btn btn-success">Είσοδος</button>
                        </div>
                        <div className="mt-4 w-100 text-center">
                            <Link to="/forgot-account" className="fst-italic fs-5 fw-bold forgot-account">
                                Ξεχάσατε τα στοιχεία εισόδου ;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;