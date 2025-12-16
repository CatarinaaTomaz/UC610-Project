import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Poems from "./pages/Poems"

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Home />
        <Poems />
      </div>
    </>
  )
}

export default App
