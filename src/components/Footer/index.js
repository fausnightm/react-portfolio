import React from "react";
import gitHubImg from "../../assets/logo/github-logo.png";
import linkedInImg from "../../assets/logo/linkedin-logo.png"

function Footer() {
	return (
		<footer className="d-flex justify-content-center footer">
			<div className="logo">
				<a href="https://github.com/fausnightm" target="_blank"rel="noopener noreferrer">
					<img
						src={gitHubImg}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div className="logo">
				<a href="https://www.linkedin.com/in/max-fausnight/" target="_blank" rel="noopener noreferrer">
					<img
						src={linkedInImg}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
			{/* <div>
				<a
					href="https://twitter.com/mister_garak"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logo/twitter-logo.png")}
						alt="Twitter"
						className="logo"
					></img>
				</a>
			</div> */}
		</footer>
	);
}

export default Footer;
