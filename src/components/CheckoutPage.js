import React from "react";
import { Link } from "react-router-dom";

export default function CheckoutPage() {
	let productCount = localStorage.getItem("itemCount");
	return (
		<div>
			<Link to="/">Back to page</Link>
			<p>{productCount}</p>
		</div>
	);
}
