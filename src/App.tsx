import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import LoginForm from './components/LoginForm/LoginForm'
import Navbar from './components/Navbar/Navbar'
import VisbilityContext from './context/VisbilityContext'

function App() {
  const { visibilityLoginForm } = React.useContext(VisbilityContext);


  return (
      <div className='App'>
        <Header />
        <Navbar />

        {visibilityLoginForm ? (<LoginForm />) : (null)}

      </div>
  )
}

export default App
