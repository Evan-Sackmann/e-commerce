import React, { useState } from "react";
import iconMinus from "../images/icon-minus.svg";
import iconPlus from "../images/icon-plus.svg";

export default function ItemQuantity() {
	const [itemCount, setItemCount] = useState(0);
	function addItemToCart() {
		return setItemCount((prevCount) => prevCount + 1);
	}
	function removeItemFromCart() {
		itemCount > 0
			? setItemCount((prevCount) => prevCount - 1)
			: setItemCount(0);
	}

	return (
		<div className="item-quantity">
			<button className="button button-item" onClick={removeItemFromCart}>
				<img src={iconMinus} alt="remove" />
			</button>
			<p>{itemCount}</p>
			<button className="button button-item" onClick={addItemToCart}>
				<img src={iconPlus} alt="add" />
			</button>
		</div>
	);
}
