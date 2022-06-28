import React from "react";
import iconLogo from "../images/logo.svg";
import iconMenu from "../images/icon-menu.svg";
import iconCart from "../images/icon-cart.svg";
import iconAvatar from "../images/image-avatar.png";

export default function NavBar() {
	return (
		<nav className="navigation-bar">
			<img src={iconMenu} alt="" />
			<img src={iconLogo} alt="" />
			<img src={iconCart} alt="" />
			<img src={iconAvatar} alt="" />
		</nav>
	);
}
