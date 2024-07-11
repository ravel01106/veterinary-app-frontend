import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainScreen from './screens/MainScreen/MainScreen'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import AddDateScreen from "./screens/AddDateScreen/AddDateScreen"
import CustomProvider from './provider/CustomProvider.tsx';
import HomeScreen from "./screens/HomeScreen/HomeScreen.tsx"
import UpdateDateScreen from "./screens/UpdateDateScreen/UpdateDateScreen.tsx"

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
          <Route path='/Home' element={<HomeScreen />} />
          <Route path='/addDate' element={<AddDateScreen />} />
          <Route path='/updateDate/:id' element={<UpdateDateScreen />} />
        </Routes>
        </CustomProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
