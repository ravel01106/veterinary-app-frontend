import { FaEye } from "react-icons/fa"
import dates from "../../data/dates"
import style from "./TableInfo.module.css"

const TableInfo = () => {
  return (
    <div className="container mt-5">
      <div className={`table-responsive ${style.tableScroll}`}>
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Pet Name</th>
              <th scope="col">Owner Name</th>
              <th scope="col">Date</th>
              <th scope="col">Symptoms</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {dates.map(date => (
              <tr className={`${style.field}`}>
                <th scope="row">{date.Id}</th>
                <td>{date.petName}</td>
                <td>{date.ownerName}</td>
                <td>{date.date + " - " + date.time}</td>
                <td>{date.symptoms}</td>
                <td><button type="button" className={`btn btn-primary text-light ${style.icon}`}><FaEye size={24} /></button></td>
              </tr>
            ))}

          </tbody>
        </table>


      </div>

    </div>
  )
}

export default TableInfo