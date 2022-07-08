import React from "react";

export default function ImageThumbnail(props) {
	return (
		<div>
			<img
				className="image-thumbnail-item"
				src={props.imageArrayItem}
				onClick={() => props.changeImage(props.arrayNumber)}
				alt="thumb"
			/>
		</div>
	);
}
