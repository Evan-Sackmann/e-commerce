import React from "react";
import ReactModal from "react-modal";
import iconClose from "../images/icon-close.svg";
import NavItems from "./NavItems";

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
			<div className="modal-menu">
				<img
					className="button"
					onClick={props.onRequestClose}
					src={iconClose}
					alt=""
				/>
				<NavItems />
			</div>
		</ReactModal>
	);
}
