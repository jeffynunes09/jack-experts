import "./App.css"
import Navbar from './components/Navbar'
import Home from "./pages/Home/index.tsx"
import Footer from "./components/Footer/index.tsx"
function App() {
  
  return (
    <div className="ContainerHome">
    <Navbar/>
    <Home/>
    <Footer/>
     
    </div>
  )
}

export default App
