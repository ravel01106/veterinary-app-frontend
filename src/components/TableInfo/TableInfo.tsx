import { FaEye, FaTrashAlt } from "react-icons/fa"
import style from "./TableInfo.module.css"
import { ITableInfoProps } from "../../interfaces/ITableInfoProps"
import dates from "../../data/dates"
import React from "react"
import DateService from "../../services/DateService"
import { IDates } from "../../interfaces/IDates"
import ModalDelete from "../ModalDelete/ModalDelete"
import ModalInfo from "../ModalInfo/ModalInfo"
import MessageErrorInTable from "../MessageErrorInTable/MessageErrorInTable"

const TableInfo = ({ currentDates }: ITableInfoProps) => {
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showInfoModal, setShowInfoModal] = React.useState(false);
  const [currentDate, setCurrentDate] = React.useState({} as IDates)

  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleCloseInfoModal = () => setShowInfoModal(false);
  const handleShowInfoModal = (date:IDates) => {
    setShowInfoModal(true)
    setCurrentDate(date)
  };
  const handleShowDeleteModal = (date:IDates) => {
    setShowDeleteModal(true)
    setCurrentDate(date)

  };

  const deleteDate = () => {
    DateService.deleteDateById(currentDate.Id)
    setShowDeleteModal(false)

  }

  const goToUpdateScreen = () => {
    console.log("AAAAAAAAAAAAAAA")
  }
  return (
    <>
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
                      <td>
                        <button type="button" className={`btn btn-primary text-light ${style.iconInfo} me-3`} onClick={() => handleShowInfoModal(date)}><FaEye size={24} /></button>
                        <button type="button" className={`btn btn-danger text-light}  ${style.iconDelete}`} onClick={() => handleShowDeleteModal(date)}><FaTrashAlt size={24} /></button>
                      </td>
                    </tr>

                  ))}

                </tbody>
              </table>
            ) : (
              <MessageErrorInTable title="No se han encontrado citas"/>
            )}

          </div>
        ) : (<MessageErrorInTable title="No se han registrado citas en la base de datos"/>)}
      </div>
      <ModalDelete handleCloseDeleteModal={handleCloseDeleteModal} showDeleteModal={showDeleteModal} deleteDate={deleteDate}/>
      <ModalInfo showInfoModal={showInfoModal} handleCloseInfoModal={handleCloseInfoModal} currentDate={currentDate} goToUpdateScreen={goToUpdateScreen}/>
    </>
  )
}

export default TableInfo