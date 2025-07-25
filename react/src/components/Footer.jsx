import React from "react";
import { Link } from "react-router-dom";

import '../assets/styles/Footer.css';

function Footer() {
	return (
		<footer className="footer-distributed border-top" style={{marginTop: '7.5rem'}}>
			<div className="footer-left">
				<h3>Vision<span>Studio</span>.</h3>
				<p className="footer-company-name">VisionStudio © 2023</p>
			</div>
			<div className="footer-center">
				<div>
					<i className="bi bi-pin-map"></i>
					<p>Δημ. Μαργαροπούλου 20<br />Θεσσαλονίκη 546 29</p>
				</div>
				<div>
					<i className="bi bi-phone"></i>
					<p>+30 23102 02026</p>
				</div>
				<div>
					<i className="bi bi-envelope"></i>
					<p><Link to="mailto:info@visionstudio.gr">info@visionstudio.gr</Link></p>
				</div>
			</div>
			<div className="footer-right">
				<p className="footer-company-about">
					<span>Η εταιρία μας</span>
					H εταιρεία Vision Studio δημιουργήθηκε το 2003 στη Θεσσαλονίκη με βασικό αντικείμενο και προσανατολισμό το σχεδιασμό και την ανάπτυξη ιστοσελίδων
				</p>
				<div className="footer-icons">
					<Link to="#"><i className="bi bi-facebook"></i></Link>
					<Link to="#"><i className="bi bi-twitter"></i></Link>
					<Link to="#"><i className="bi bi-linkedin"></i></Link>
					<Link to="#"><i className="bi bi-github"></i></Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer;