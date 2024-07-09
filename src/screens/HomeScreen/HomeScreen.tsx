import React from 'react'
import SearchInput from '../../components/SearchInput/SearchInput'
import TableInfo from '../../components/TableInfo/TableInfo'
import dates from '../../data/dates';
import style from "./HomeScreen.module.css"

const HomeScreen = () => {
  const [currentDates, setCurrentDates] = React.useState(dates);

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

  return (
    <div className={`${style.mainContainer} p-4`}>
    <SearchInput searchDate={searchDate}/>
    <TableInfo currentDates={currentDates}/>
  </div>
  )
}

export default HomeScreen