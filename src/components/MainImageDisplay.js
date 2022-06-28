import React, { useState } from "react";
import previousButton from "../images/icon-previous.svg";
import nextButton from "../images/icon-next.svg";
import image1 from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-4.jpg";

export default function MainImageDisplay() {
	const [currentImageNumber, setCurrentImageNumber] = useState(0);
	const imageArray = [image1, image2, image3, image4];

	function incrementImageNumber() {
		if (currentImageNumber < 3) {
			setCurrentImageNumber((prevNum) => prevNum + 1);
		} else {
			setCurrentImageNumber(0);
		}
	}
	function decrementImageNumber() {
		if (currentImageNumber > 0) {
			setCurrentImageNumber((prevNum) => prevNum - 1);
		} else {
			setCurrentImageNumber(3);
		}
	}
	return (
		<div className="main-image-container">
			<button
				className="button button-prev"
				onClick={decrementImageNumber}
			>
				<img className="button-img" src={previousButton} alt="" />
			</button>
			<img
				className="main-image"
				src={imageArray[currentImageNumber]}
				alt=""
			/>
			<button
				className="button button-next"
				onClick={incrementImageNumber}
			>
				<img className="button-img" src={nextButton} alt="" />
			</button>
		</div>
	);
}
