import ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import "./app/index.scss";
import { PageWelcome } from "./common/pages/PageWelcome.tsx";
import { Page404 } from "./common/pages/Page404.tsx";
import { PageBooks } from "./common/pages/PageBooks.tsx";
import { PageCheckout } from "./common/pages/PageCheckout.tsx";
import App from "./app/App.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <Page404 />,
		element: <App />,
		children: [
			{
				path: "/welcome",
				element: <PageWelcome />,
			},
			{
				path: "books",
				element: <PageBooks />,
			},
			{
				path: "checkout",
				element: <PageCheckout />,
			},
			{
				path: "/",
				element: <Navigate to="/welcome" replace />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);
