import AddToCartButton from "./components/AddToCartButton";
import ItemQuantity from "./components/ItemQuantity";
import MainImageDisplay from "./components/MainImageDisplay";
import NavBar from "./components/NavBar";
import TextContent from "./components/TextContent";

function App() {
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

export default App;
