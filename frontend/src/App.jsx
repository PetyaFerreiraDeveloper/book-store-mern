import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <nav>Navbar</nav>
      <main className="min-h-screen bg-red-200 px-4 py-6 font-primary">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  )
}

export default App
