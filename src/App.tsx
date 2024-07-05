import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import LoginForm from './components/LoginForm/LoginForm'
import Navbar from './components/Navbar/Navbar'
import VisbilityContext from './context/VisbilityContext'
import Welcome from './components/Welcome/Welcome'

function App() {
  const { visibilityLoginForm } = React.useContext(VisbilityContext);


  return (
      <div className='App'>
        <Header />
        <Navbar />

        {visibilityLoginForm ? (<LoginForm />) : (<Welcome />)}

      </div>
  )
}

export default App
