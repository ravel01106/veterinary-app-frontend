import React from "react";
import VisbilityContext from "../../context/VisbilityContext";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import LoginForm from "../../components/LoginForm/LoginForm";
import WelcomeCard from "../../components/Welcome/Welcome";
import style from "./WelcomeScreen.module.css"

const WelcomeScreen = () => {
    const { visibilityLoginForm } = React.useContext(VisbilityContext);
  return (
    <div className={`${style.mainContainer}`}>
    <Header />
    <Navbar />

    {visibilityLoginForm ? (<LoginForm />) : (<WelcomeCard />)}

  </div>
  )
}

export default WelcomeScreen