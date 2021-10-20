import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { faPhone, faHome } from "@fortawesome/free-solid-svg-icons";

function Footer() {
	return (
		<div className="main_footer">
			<div className="footer_container">
				<div className="footer">
					<div className="footer_columns">
						<h4>Social media</h4>
						<div className="social_list">
							<a className="facebook" href="/#">
								<FontAwesomeIcon icon={faGithub} />
							</a>
							<a href="/#">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
							<a href="/#">
								<FontAwesomeIcon icon={faFacebook} />
							</a>
							<a href="/#">
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</div>
					</div>

					<div className="footer_columns">
						<h4>Address</h4>
						<p>
							<a className="address_icons" href="/#">
								<FontAwesomeIcon icon={faHome} />
							</a>
							4700 Næstved
							<br />
							Denmark
						</p>
					</div>
					<div className="footer_columns">
						<h4>Phone Number</h4>
						<p>
							<a className="address_icons" href="/#">
								<FontAwesomeIcon icon={faPhone} />
							</a>
							+45 27 28 80 86
						</p>
					</div>
				</div>
				<hr />
				<div className="all_rights_reserve">
					<p>
						&copy;{new Date().getFullYear()} AkoAyukngat | all rights reserved
					</p>
				</div>
			</div>
		</div>
	);
}
export default Footer;
