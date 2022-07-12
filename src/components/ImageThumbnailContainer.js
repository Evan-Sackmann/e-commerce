import React from "react";
import ImageThumbnail from "./ImageThumbnail";

export default function ImageThumbnailContainer(props) {
	return (
		<div className="image-thumbnail-container">
			<ImageThumbnail
				imageArrayItem={props.imageArray[0]}
				arrayNumber={0}
				changeImage={props.changeImage}
				currentImageNumber={props.currentImageNumber}
			/>
			<ImageThumbnail
				imageArrayItem={props.imageArray[1]}
				arrayNumber={1}
				changeImage={props.changeImage}
				currentImageNumber={props.currentImageNumber}
			/>
			<ImageThumbnail
				imageArrayItem={props.imageArray[2]}
				arrayNumber={2}
				changeImage={props.changeImage}
				currentImageNumber={props.currentImageNumber}
			/>
			<ImageThumbnail
				imageArrayItem={props.imageArray[3]}
				arrayNumber={3}
				changeImage={props.changeImage}
				currentImageNumber={props.currentImageNumber}
			/>
		</div>
	);
}
