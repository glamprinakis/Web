import React from "react";
import { Link } from "react-router-dom";

import '../assets/styles/Footer.css';

function Header(){
    return(
        <div className="header">
            <div className="w-100 bg-success d-flex flex-row text-light justify-content-end" style={{height: "2.5rem"}}>
                <div className="fs-5 h-100 d-flex align-items-center justify-content-center me-5 fw-bold">
                    <i className="bi bi-telephone-fill me-2"></i> 23102 02026
                </div>
                <div className="fs-5 h-100 d-flex align-items-center justify-content-center me-5 fw-bold">
                    <Link to={"/contact"}>
                        <i className="bi bi-patch-question-fill me-2"></i> Βοήθεια
                    </Link>
                </div>
            </div>
		</div>
    )
}

export default Header;