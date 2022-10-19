import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

export default function CheckoutPage() {
	let productCount = localStorage.getItem("itemCount");

	return (
		<div>
			<Link to="/e-commerce">Back to page</Link>
			<img src="../images/image-product-1-thumbnail.jpg" alt="img" />
			<p>
				{data[0].name} x {productCount}
			</p>

			<button className="cart-checkout">Confirm Purchase</button>
		</div>
	);
}
