import React from "react";

export default function ImageThumbnail(props) {
	const currentThumbnail = props.currentImageNumber === props.arrayNumber;
	return (
		<div className={currentThumbnail ? "active-thumbnail" : ""}>
			<img
				className={`image-thumbnail-item ${
					currentThumbnail ? "active-thumbnail-image" : ""
				}`}
				src={props.imageArrayItem}
				onClick={() => props.changeImage(props.arrayNumber)}
				alt="thumb"
			/>
		</div>
	);
}
