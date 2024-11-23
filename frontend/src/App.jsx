import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import "./App.css"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="flex flex-col h-screen max-w-screen-2xl mx-auto">
      <Navbar />
      <main className="flex-1 px-4 py-6 font-primary">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
