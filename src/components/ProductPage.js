import ItemQuantity from "./ItemQuantity";
import MainImageDisplay from "./MainImageDisplay";
import NavBar from "./NavBar";
import TextContent from "./TextContent";

export default function ProductPage() {
	return (
		<div>
			<NavBar />
			<div className="main-content">
				<MainImageDisplay />
				<div className="item-info-container">
					<TextContent />
					<ItemQuantity />
				</div>
			</div>
		</div>
	);
}
