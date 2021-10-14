import React from "react";
import Navigation from "../Navigation";

function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<header>
			<div>
				<h2>Max Fausnight</h2>
			</div>
			<div>
				<Navigation currentTab={currentTab} setCurrentTab={setCurrentTab}/>
			</div>
		</header>
	);
}

export default Header;
