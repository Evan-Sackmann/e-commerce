import React from "react";
import iconCartLight from "../images/icon-cart-light.svg";

export default function AddToCartButton({ quantity }) {
	function addItemToCart() {
		let itemCount = quantity;
		localStorage.setItem("itemCount", itemCount);
	}
	return (
		<button className="add-to-cart" onClick={addItemToCart}>
			<img src={iconCartLight} alt="add to cart" />
			<p>Add to cart</p>
		</button>
	);
}
