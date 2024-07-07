import MainScreen from './screens/MainScreen/MainScreen'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<WelcomeScreen />}/>
        <Route  path='/date' element={<MainScreen />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
