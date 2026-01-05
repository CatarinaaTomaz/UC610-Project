import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Poems from "./pages/Poems"

function App() {
  return (
    <>
      <Navbar />
      <main className="container py-5">
        <Home />
        <Poems />
      </main>
    </>
  )
}

export default App
