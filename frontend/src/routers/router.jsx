import { createBrowserRouter } from "react-router-dom"
import App from "../App"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <h1>Home</h1>
            <button className="btn-primary">Subscribe</button>
          </div>
        ),
      },
      { path: "/about", element: <h1>About</h1> },
      { path: "/orders", element: <h1>Orders</h1> },
    ],
  },
])

export default router
