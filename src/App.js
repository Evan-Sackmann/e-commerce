import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ProductPage from "./components/ProductPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <ProductPage />,
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
