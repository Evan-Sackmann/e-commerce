import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CheckoutPage from "./components/CheckoutPage";
import ProductPage from "./components/ProductPage";

const router = createBrowserRouter([
	{
		path: "/e-commerce",
		element: <ProductPage />,
	},
	{
		path: "/e-commerce/checkout",
		element: <CheckoutPage />,
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
