import React from "react";
import WelcomeCard from "../../components/Welcome/Welcome";
import style from './MainScreen.module.css'
import SearchInput from "../../components/SearchInput/SearchInput";
import TableInfo from "../../components/TableInfo/TableInfo";
import dates from "../../data/dates";

const MainScreen = () => {
  const [currentDates, setCurrentDates] = React.useState(dates);
  const [isLogged, setIsLogged] = React.useState(false);


  const searchDate = (input:string) => {
    if (input !== ""){
      setCurrentDates((oldState) => {
        const dateSearched = oldState.filter((date) => date.petName.startsWith(input));
        return dateSearched
      })
    }else{
      setCurrentDates(dates)
    }
  }

  React.useEffect(() => {
    if (localStorage.getItem("conectado")){
      setIsLogged(true)
    }else{
      setIsLogged(false)
    }
  })
  return (
    <>
      {isLogged ? (
        <div className={`${style.mainContainer} p-4`}>
          <SearchInput searchDate={searchDate}/>
          <TableInfo dates={currentDates}/>
        </div>
      ) : (
        <WelcomeCard />
      )}
    </>
  )
}

export default MainScreen