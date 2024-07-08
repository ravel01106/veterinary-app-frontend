import React from "react";
import WelcomeCard from "../../components/Welcome/Welcome";
import UserDataContext from "../../context/UserDataContext";
import style from './MainScreen.module.css'
import SearchInput from "../../components/SearchInput/SearchInput";


const MainScreen = () => {
  const {isLogged } = React.useContext(UserDataContext);
  return (
    <>
      {isLogged ? (
        <div className={`${style.mainContainer} p-4`}>
          <SearchInput />
        </div>
      ) : (
        <WelcomeCard />
      )}
    </>
  )
}

export default MainScreen