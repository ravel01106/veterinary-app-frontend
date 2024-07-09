import { FaEye } from "react-icons/fa"
import style from "./TableInfo.module.css"
import { ITableInfoProps } from "../../interfaces/ITableInfoProps"
import dates from "../../data/dates"

const TableInfo = ({ currentDates }: ITableInfoProps) => {
  return (
    <div className="container mt-5">
     {dates.length > 0 ? (
       <div className={`table-responsive ${style.tableScroll}`}>
       {currentDates.length > 0 ? (
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
             {currentDates.map(date => (
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
       ) : (
       <div className="card bg-danger">
         <h3 className="card-title text-white">No se han encontrado citas</h3>
       </div>
     )}



     </div>
     ) : (<div className="card bg-danger">
      <h3 className="card-title text-white">No se han registrado citas en la base de datos</h3>
    </div>)}

    </div>
  )
}

export default TableInfo