import React, { useState } from "react";
import Modal from "react-modal";
import iconLogo from "../images/logo.svg";
import iconMenu from "../images/icon-menu.svg";
import iconCart from "../images/icon-cart.svg";
import iconAvatar from "../images/image-avatar.png";
import CartModal from "./CartModal";
import { customStyles } from "../utils/ModalStyling";
import MenuModal from "./MenuModal";

export default function NavBar() {
	const [showCartModal, setShowCartModal] = useState(false);
	const [showMenuModal, setShowMenuModal] = useState(false);

	function displayCartStatus() {
		const cartItemCount = localStorage.getItem("itemCount");
		if (cartItemCount > 0) {
			return <p>{localStorage.getItem("itemCount")}</p>;
		} else {
			return <p className="modal-content">Your cart is empty.</p>;
		}
	}

	function openCartModal() {
		setShowCartModal(true);
	}
	function closeCartModal() {
		setShowCartModal(false);
	}
	function openMenuModal() {
		setShowMenuModal(true);
	}
	function closeMenuModal() {
		setShowMenuModal(false);
	}

	return (
		<nav className="navigation-bar">
			<div className="navigation-bar-item">
				<img
					className="button"
					onClick={openMenuModal}
					src={iconMenu}
					alt=""
				/>
				<img src={iconLogo} alt="" />
			</div>
			<div className="navigation-bar-item">
				<img
					className="button"
					onClick={openCartModal}
					src={iconCart}
					alt=""
				/>
				<img className="icon-avatar" src={iconAvatar} alt="" />
			</div>

			<MenuModal
				isOpen={showMenuModal}
				shouldCloseOnOverlayClick={true}
				onRequestClose={() => closeMenuModal()}
				ariaHideApp={false}
			></MenuModal>

			<Modal
				isOpen={showCartModal}
				style={customStyles}
				ariaHideApp={false}
				shouldCloseOnOverlayClick={true}
				onRequestClose={closeCartModal}
			>
				<>
					<p className="cart-modal-header">Cart</p>
					{displayCartStatus()}
				</>
			</Modal>
		</nav>
	);
}
