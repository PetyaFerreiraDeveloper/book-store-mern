import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/home/Home"
import Login from "../pages/Login"
import Error from "../pages/Error"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/login", element: <Login /> },
      { path: "/orders", element: <h1>Orders</h1> },
    ],
  },
])

export default router
