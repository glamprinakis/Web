import React, { useState } from "react";
import { Link } from "react-router-dom";
import BreadCrumb from '../components/BreadCrumb';

import '../assets/styles/Register.css';
import image from '../assets/images/image 5.png'

function Register(){

    const [firstname, setFirstname] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [username, setUsername] = useState("")

    const handlechangeFirstname = (event) => {
        setFirstname(event.target.value);
    };

    const handlechangeSurname = (event) => {
        setSurname(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    };

    const handleChangePassword = (event) => {
        let element1 = document.getElementById('register-password')
        let element2 = document.getElementById('register-password-2')
        let element3 = document.getElementById('password-error')
        element1.className=""
        element2.className=""
        element3.className="d-none"
        setPassword1(event.target.value);
    };
    const handleChangePassword2 = (event) => {
        let element1 = document.getElementById('register-password')
        let element2 = document.getElementById('register-password-2')
        let element3 = document.getElementById('password-error')
        element1.className=""
        element2.className=""
        element3.className="d-none"
        setPassword2(event.target.value);
    };
    const handleRegister = async () => {
        let element1 = document.getElementById('register-password')
        let element2 = document.getElementById('register-password-2')
        let element3 = document.getElementById('password-error')
        if(password === password2){
            const data = {name:firstname, surname:surname, username:username, email: email, pwd:password }
            try {
                const response = await fetch("http://localhost:3005/user/signup", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
                });
                window.location.href = "/register-success";
              } catch (error) {
                console.error("Error:", error);
            }
        }else{
            element1.className+="border border-3 border-danger"
            element2.className+="border border-3 border-danger"
            element3.className="text-danger fw-bold"
        }
    }

    return(
        <div className="register">
            <BreadCrumb                 
                items={[{"path":"/register","label":"Εγγραφή"}]}>
            </BreadCrumb>
            <div className="ms-auto me-auto mt-3 register-container d-flex">
                <div className="left">
                    <img className="image-hover" alt="" src={image}></img>
                    <div className="create-account-container">
                            <div className="mt-3 text-warning w-50 text-center fw-bold fs-1 ms-auto me-auto">
                                Παρακαλούμε συμπληρώστε τα στοιχεία σας
                            </div>
                        </div>
                    <div className="back text-light w-50 text-center fw-bold fs-5 ms-5">
                            <Link to="/login" className="back-btn d-flex align-items-center">
                                <i className="bi bi-arrow-left-square-fill"></i>
                                <span className="ms-3">Πίσω</span>
                            </Link>
                    </div>
                </div>
                <div className="right d-flex align-items-center justify-content-center">
                    <div className="register-form bg-body">
                        <div className="mt-5 w-100 d-flex justify-content-center align-items-center mt-4 flex-column">
                            <div className="d-flex register-name-surname w-100">
                                <input onChange={handlechangeFirstname} value={firstname} id="register-firstname" type="text" placeholder="Όνομα"></input>
                                <input onChange={handlechangeSurname} value={surname} id="register-surname" type="text" placeholder="Επώνυμο"></input>
                            </div>
                            <input onChange={handleChangeUsername} value={username} id="register-username" type="text" placeholder="Username"></input>
                            <input onChange={handleChangeEmail} value={email} id="register-email" type="email" placeholder="Email"></input>
                            <input onChange={handleChangePassword} value={password} id="register-password" type="password" placeholder="Κωδικός Πρόσβασης"></input>
                            <input onChange={handleChangePassword2}  value={password2} id="register-password-2" type="password" placeholder="Επαλήθευση Κωδικού Πρόσβασης"></input>
                            <span id="password-error" className="d-none">Οι κωδικοί δεν ταιριάζουν</span>
                        </div>
                        <div className="w-100 d-flex justify-content-center mt-2">  
                            <button onClick={handleRegister} className="fw-bold register-btn btn btn-success">Εγγραφή</button>
                        </div>
                        <div className="mt-4 w-100 text-center">
                            <Link to="/login" className="fst-italic fw-bold forgot-account">
                                Έχετε ήδη λογαριασμό;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;