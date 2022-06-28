import React, { useState } from "react";
import previousButton from "../images/icon-previous.svg";
import nextButton from "../images/icon-next.svg";
import image1 from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-4.jpg";

export default function MainImageDisplay() {
	const [currentImageNumber, setCurrentImageNumber] = useState(1);
	const [currentImage, setCurrentImage] = useState(image1);

	function changeImage() {
		switch (currentImageNumber) {
			case 1:
				setCurrentImage(image1);
				break;
			case 2:
				setCurrentImage(image2);
				break;
			case 3:
				setCurrentImage(image3);
				break;
			case 4:
				setCurrentImage(image4);
				break;
			default:
				return image1;
		}
	}

	function incrementImageNumber() {
		if (currentImageNumber < 4) {
			setCurrentImageNumber((prevNum) => prevNum + 1);
		} else {
			setCurrentImageNumber(1);
		}
		changeImage();
		console.log(currentImageNumber);
	}
	function decrementImageNumber() {
		if (currentImageNumber > 1) {
			setCurrentImageNumber((prevNum) => prevNum - 1);
		} else {
			setCurrentImageNumber(4);
		}
		changeImage();
		console.log(currentImageNumber);
	}
	return (
		<div>
			<button onClick={decrementImageNumber}>
				<img src={previousButton} alt="" />
			</button>
			<img src={currentImage} alt="" />
			<button onClick={incrementImageNumber}>
				<img src={nextButton} alt="" />
			</button>
		</div>
	);
}
