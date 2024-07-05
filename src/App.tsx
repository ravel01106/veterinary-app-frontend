import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import LoginForm from './components/LoginForm/LoginForm'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [visibleForm, setVisibleForm] = React.useState(false)


  return (
    <div className='App'>
     <Header />
     <Navbar setVisibleForm = {setVisibleForm}/>

     {visibleForm ? (<LoginForm />): (null)}
     
    </div>
  )
}

export default App
