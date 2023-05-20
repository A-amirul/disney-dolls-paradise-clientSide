import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Home/Login";
import Register from "../pages/Home/Home/Register";
import Blog from "../pages/Home/Home/Blog";
import ErrorPage from "../pages/Home/Home/ErrorPage";
import AddAToy from "../pages/Home/Home/AddAToy";
import MyToy from "../pages/Home/Home/MyToy";
import AllToys from "../pages/Home/Home/AllToys";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../pages/Home/Home/ViewDetails";
import UpdateJob from "../pages/Home/Home/UpdateToy";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement:<ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element:<Home></Home>
			},
			{
				path: "/login",
				element: <Login></Login>
			},
			{
				path: "/register",
				element: <Register></Register>
			},
			{
				path: "/blog",
				element:<Blog></Blog>
			},
			{
				path: "/allToys",
				element: <AllToys></AllToys>,
				loader: () => fetch("http://localhost:4000/alltoys")
			},
			{
				path: "/allToys/:_id",
				element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
				
			},
			{
				path: "/addToy",
				element:<AddAToy></AddAToy>
			},
			{
				path: "/myToy",
				element: <PrivateRoute><MyToy></MyToy></PrivateRoute>,
				loader: () => fetch("http://localhost:4000/alltoys")
			},
			{
				path: "/updateToy/:_id",
				element:<UpdateJob></UpdateJob>
			}
		]
	},
]);

export default router;