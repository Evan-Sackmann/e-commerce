import React from "react";
import iconCartLight from "../images/icon-cart-light.svg";

export default function AddToCartButton() {
	return (
		<button className="add-to-cart">
			<img src={iconCartLight} alt="add to cart" />
			<p>Add to cart</p>
		</button>
	);
}
