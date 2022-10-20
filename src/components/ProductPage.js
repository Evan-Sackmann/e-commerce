import ItemQuantity from "./ItemQuantity";
import MainImageDisplay from "./MainImageDisplay";
import NavBar from "./NavBar";
import TextContent from "./TextContent";
import data from "../data";

export default function ProductPage() {
	return (
		<div>
			<NavBar />
			<div className="main-content">
				<MainImageDisplay product={data[0]} />
				<div className="item-info-container">
					<TextContent />
					<ItemQuantity />
				</div>
			</div>
		</div>
	);
}
