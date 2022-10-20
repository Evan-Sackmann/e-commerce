import React from "react";
import { Link } from "react-router-dom";
import data from "../data";
import thumb1 from "../images/product1/image-product-1-thumbnail.jpg";

export default function CheckoutPage() {
	let productCount = localStorage.getItem("itemCount");

	return (
		<div className="checkout">
			<Link to="/e-commerce">Back to page</Link>
			<br />
			<div>
				<img src={thumb1} alt="img" />
				<p>
					{data[0].name} x {productCount}
				</p>
			</div>
			<button className="cart-checkout">Confirm Purchase</button>
		</div>
	);
}
