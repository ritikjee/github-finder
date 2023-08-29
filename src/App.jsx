import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import './App.css'
import Navbar from './Components/Layout/Navbar'
import Footer from "./Components/Layout/Footer"
import Home from "./pages/Home"
import About from './pages/About'
import ErrorPage from "./pages/ErrorPage"
import { GithubProvider } from "./Context/Github/GithubContext"
import UserPage from "./pages/UserPage"
function App() {
  

  return (
    <GithubProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar/>
        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/user/:login" element={<UserPage/>}/>
            <Route path="/notfound" element={<ErrorPage/>}/>
            <Route path="/*" element={<ErrorPage/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
    </GithubProvider>
  )
}

export default App
