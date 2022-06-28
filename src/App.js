import AddToCartButton from "./components/AddToCartButton";
import ItemQuantity from "./components/ItemQuantity";
import MainImageDisplay from "./components/MainImageDisplay";
import NavBar from "./components/NavBar";
import TextContent from "./components/TextContent";

function App() {
	return (
		<div>
			<NavBar />
			<MainImageDisplay />
			<TextContent />
			<ItemQuantity />
			<AddToCartButton />
		</div>
	);
}

export default App;
