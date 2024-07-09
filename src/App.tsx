import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainScreen from './screens/MainScreen/MainScreen'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import AddDateScreen from "./screens/AddDateScreen/AddDateScreen"
import CustomProvider from './provider/CustomProvider.tsx';

function App() {
  return (
    <div className="mainContainer">
      <BrowserRouter>
      <CustomProvider>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<MainScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/addDate' element={<AddDateScreen />} />
        </Routes>
        </CustomProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
