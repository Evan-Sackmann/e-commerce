import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import CheckoutPage from "./components/CheckoutPage";
import ProductPage from "./components/ProductPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <ProductPage />,
	},
	{
		path: "checkout",
		element: <CheckoutPage />,
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
