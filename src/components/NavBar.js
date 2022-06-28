import React from "react";
import iconLogo from "../images/logo.svg";
import iconMenu from "../images/icon-menu.svg";
import iconCart from "../images/icon-cart.svg";
import iconAvatar from "../images/image-avatar.png";

export default function NavBar() {
	const log = () => {
		console.log("clicked");
	};
	return (
		<nav className="navigation-bar">
			<img onClick={log} src={iconMenu} alt="" />
			<img src={iconLogo} alt="" />
			<img src={iconCart} alt="" />
			<img src={iconAvatar} alt="" />
		</nav>
	);
}
