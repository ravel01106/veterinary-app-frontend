import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainScreen from './screens/MainScreen/MainScreen'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import LoginScreen from './screens/LoginScreen/LoginScreen'

function App() {
  return (
    <div className="mainContainer">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<MainScreen />} />
          <Route path='/login' element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
