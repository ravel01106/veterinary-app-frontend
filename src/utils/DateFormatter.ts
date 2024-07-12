
const format = (date:string) => {
  const dateSplit = date.split("/")
  return dateSplit[2] + "-" + dateSplit[1] + "-" + dateSplit[0]
}


const DateFormatter = {
  format

}


export default DateFormatter