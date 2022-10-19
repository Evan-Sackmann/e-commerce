import React, { useState } from "react";
import previousButton from "../images/icon-previous.svg";
import nextButton from "../images/icon-next.svg";
import data from "../data";
import ImageThumbnailContainer from "./ImageThumbnailContainer";

export default function MainImageDisplay() {
	const [currentImageNumber, setCurrentImageNumber] = useState(0);
	const imageArray = [
		data[0].image1,
		data[0].image2,
		data[0].image3,
		data[0].image4,
	];

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
			<div className="image-container">
				<img
					className="main-image"
					src={imageArray[currentImageNumber]}
					alt=""
				/>
				<ImageThumbnailContainer
					imageArray={imageArray}
					changeImage={setCurrentImageNumber}
					currentImageNumber={currentImageNumber}
				/>
			</div>
			<button
				className="button button-next"
				onClick={incrementImageNumber}
			>
				<img className="button-img" src={nextButton} alt="" />
			</button>
		</div>
	);
}
