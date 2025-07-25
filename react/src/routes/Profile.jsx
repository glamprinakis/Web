import React, { useState } from "react";
import BreadCrumb from '../components/BreadCrumb';

import '../assets/styles/Profile.css';

function Profile(){

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    
    const handleChangeName = (event) => {
        setFirstName(event.target.value);
    };   
    const handleChangeSurname = (event) => {
        setLastName(event.target.value);
    };
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleChangePassword2 = (event) => {
        setPassword2(event.target.value);
    };
    const handleRegister = async () => {
        console.log(firstName+lastName+email)
    }

    return(  
        <div className="login">
            <BreadCrumb                 
                items={[{"path":"/profile","label":"Λογαριασμός"}]}>
            </BreadCrumb>
            <div className="ms-auto me-auto mt-3 account-container d-flex bg-body border border-2">
                <div className="account-container-left d-flex justify-content-center align-items-center flex-column">
                    <span className="description w-90 mb-5">Επεξεργαστείτε τα στοιχεία σας</span>
                    <div className="d-flex flex-row align-items-center">
                        <div className="avatar">
                            <img src="https://gitlab.inria.fr/uploads/-/system/user/avatar/641/avatar.png"></img>
                        </div>
                        <span className="ms-3 username">atzavaras</span>
                    </div>
                </div>
                <div className="account-container-right d-flex align-items-center justify-content-center">
                    <div className="account-form d-flex flex-column">  
                        <input className="border border-2 mb-2" onChange={handleChangeName} value={firstName} id="account-first-name" type="text" placeholder="Όνομα"></input>
                        <input className="border border-2 mb-2" onChange={handleChangeSurname} value={lastName} id="account-last-name" type="text" placeholder="Επίθετο"></input>
                        <input className="border border-2 mb-2" onChange={handleChangeEmail} value={email} id="account-email" type="email" placeholder="Email"></input>
                        <input className="border border-2 mb-2" onChange={handleChangePassword} value={password} id="account-password" type="password" placeholder="Κωδικός Πρόσβασης"></input>
                        <input className="border border-2 mb-2" onChange={handleChangePassword2} value={password2} id="account-password-2" type="password" placeholder="Επιβεβαίωση Κωδικού"></input>
                    </div>
                </div>
            </div>   
            <div className="w-100 d-flex align-items-center justify-content-center mt-5">
                <button onClick={handleRegister} className="btn btn-success">ΑΠΟΘΗΚΕΥΣΗ ΑΛΛΑΓΩΝ</button>
            </div>   
        </div>
    )
}

export default Profile;