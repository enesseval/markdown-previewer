import React from "react";
import { faInstagram, faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
	return (
		<div className="footer">
			<a href="https://github.com/enesseval" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faGithub} size="3x" />
			</a>
			<a href="https://www.instagram.com/mosyocoder/" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faInstagram} size="3x" />
			</a>
			<a href="https://www.linkedin.com/in/enes-seval-162679230/" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faLinkedin} size="3x" />
			</a>
			<a href="https://twitter.com/mosyocoder" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faTwitter} size="3x" />
			</a>
		</div>
	);
}

export default Footer;
