import dates from "../data/dates"
import { IDates } from "../interfaces/IDates"

const findAllDate = () => {
  return dates
}

const findDateById = (id:string) => {
  const dateById:IDates = dates.filter( date => date.Id === id)[0]
  return dateById
}


const addNewDate = (newDate:IDates) => {
  dates.push({
    Id: (dates.length + 1).toString(),
    petName: newDate.petName,
    ownerName: newDate.ownerName,
    date: newDate.date,
    time: newDate.time,
    symptoms: newDate.symptoms
  });
}


const updateDateById = (date:IDates, id:string) => {
  const dateToUpdate:IDates = dates.filter( date => date.Id === id)[0]
  dates[dates.indexOf(dateToUpdate)] = date

}


const deleteDateById = (id:string) => {
  const dateToDelete:IDates = dates.filter( date => date.Id === id)[0]
  delete dates[dates.indexOf(dateToDelete)]
}



const DateService = {
  findAllDate,
  findDateById,
  addNewDate,
  updateDateById,
  deleteDateById
}

export default DateService;