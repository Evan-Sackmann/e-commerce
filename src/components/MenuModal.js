import React, { useState } from "react";
import ReactModal from "react-modal";
import iconClose from "../images/icon-close.svg";

export default function MenuModal(props) {
	const modalStyle = {
		overlay: {
			position: "fixed",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: "rgba(0, 0, 0, 0.75)",
		},
		content: {
			position: "absolute",
			top: "0px",
			left: "0px",
			right: "30%",
			bottom: "0px",
			background: "#fff",
			WebkitOverflowScrolling: "touch",
			outline: "none",
			borderRadius: "0",
			maxWidth: "400px",
		},
	};
	return (
		<ReactModal
			isOpen={props.isOpen}
			shouldCloseOnOverlayClick={true}
			onRequestClose={props.onRequestClose}
			style={modalStyle}
		>
			<>
				<img
					className="button"
					onClick={props.onRequestClose}
					src={iconClose}
					alt=""
				/>
				<ul className="menu-list">
					<li className="menu-list-item">Collections</li>
					<li className="menu-list-item">Men</li>
					<li className="menu-list-item">Women</li>
					<li className="menu-list-item">About</li>
					<li className="menu-list-item">Contact</li>
				</ul>
			</>
		</ReactModal>
	);
}
