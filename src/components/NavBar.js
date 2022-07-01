import React, { useState } from "react";
import Modal from "react-modal";
import iconLogo from "../images/logo.svg";
import iconMenu from "../images/icon-menu.svg";
import iconCart from "../images/icon-cart.svg";
import iconAvatar from "../images/image-avatar.png";
import CartModal from "./CartModal";
import { customStyles } from "../utils/ModalStyling";

export default function NavBar() {
	const [showModal, setShowModal] = useState(false);

	function openModal() {
		setShowModal(true);
	}
	function closeModal() {
		setShowModal(false);
	}
	return (
		<nav className="navigation-bar">
			<div className="navigation-bar-item">
				<img src={iconMenu} alt="" />
				<img src={iconLogo} alt="" />
			</div>
			<div className="navigation-bar-item">
				<img
					onClick={() => setShowModal((prev) => !prev)}
					src={iconCart}
					alt=""
				/>
				<img className="icon-avatar" src={iconAvatar} alt="" />
			</div>

			<Modal
				isOpen={showModal}
				style={customStyles}
				shouldCloseOnOverlayClick={true}
				onRequestClose={closeModal}
			>
				<>
					<p className="">Cart</p>
					<p className="modal-content">Your cart is empty.</p>
				</>
			</Modal>
		</nav>
	);
}
