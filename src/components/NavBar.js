import React, { useState } from "react";
import Modal from "react-modal";
import iconLogo from "../images/logo.svg";
import iconMenu from "../images/icon-menu.svg";
import iconDelete from "../images/icon-delete.svg";
import iconCart from "../images/icon-cart.svg";
import iconCartImage from "../images/image-product-1-thumbnail.jpg";
import iconAvatar from "../images/image-avatar.png";
import { customStyles } from "../utils/ModalStyling";
import MenuModal from "./MenuModal";

export default function NavBar() {
	const [showCartModal, setShowCartModal] = useState(false);
	const [showMenuModal, setShowMenuModal] = useState(false);

	function displayCartStatus() {
		const cartCount = localStorage.getItem("itemCount");
		if (cartCount > 0) {
			return (
				<>
					<div className="cart-content">
						<img
							className="cart-image"
							src={iconCartImage}
							alt=""
						/>
						<div className="cart-content-info">
							<p>Autumn Limited Edition Sneakers</p>
							<p>
								$125.00 x {cartCount}{" "}
								<span className="cart-total-cost">
									${localStorage.getItem("itemCount") * 125}
									.00
								</span>
							</p>
						</div>
						<img
							className="cart-delete-icon"
							onClick={removeFromCart}
							src={iconDelete}
							alt="Remove from Cart"
						/>
					</div>
					<button className="cart-checkout">Checkout</button>
				</>
			);
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

	function removeFromCart() {
		localStorage.removeItem("itemCount");
		setShowCartModal(false);
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
