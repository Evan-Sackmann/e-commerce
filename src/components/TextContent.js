import React from "react";

export default function TextContent() {
	return (
		<div>
			<h5 className="content-company-name">SNEAKER COMPANY</h5>
			<h1 className="content-item-name">Fall Limited Edition Sneakers</h1>
			<p className="content-item-description">
				These low-profile sneakers are your perfect casual wear
				companion. Featuring a durable rubber outer sole, they'll
				withstand everything the weather can offer.
			</p>
			<div className="content-item-price-container">
				<div className="content-item-current-price-container">
					<p className="content-item-price">$125.00</p>
					<p className="content-item-discount">50%</p>
				</div>
				<p className="content-item-original-price">$250.00</p>
			</div>
		</div>
	);
}
