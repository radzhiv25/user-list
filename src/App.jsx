import Navbar from "./components/Navbar"
import Users from "./components/Users"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="flex flex-col h-screen p-2">
      <Navbar />
      <Users />
      <Footer />
    </div>
  )
}

export default App
