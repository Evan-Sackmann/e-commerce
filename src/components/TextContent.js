import React from "react";
import data from "../data";

export default function TextContent() {
	// console.log(data[0].price * data[0].discountAmount);
	function calcDiscount() {
		if (data[0].discount) {
			return data[0].price * data[0].discountAmount;
		}
	}
	return (
		<div>
			<h5 className="content-company-name">{data[0].company}</h5>
			<h1 className="content-item-name">{data[0].name}</h1>
			<p className="content-item-description">{data[0].description}</p>
			<div className="content-item-price-container">
				<div className="content-item-current-price-container">
					<p className="content-item-price">${calcDiscount()}.00</p>
					<p className="content-item-discount">
						{data[0].discountAmount * 100}%
					</p>
				</div>
				<p className="content-item-original-price">
					${data[0].price}.00
				</p>
			</div>
		</div>
	);
}
