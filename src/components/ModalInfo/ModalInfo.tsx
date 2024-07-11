import { Button, Modal } from 'react-bootstrap'
import { IModalInfoProps } from '../../interfaces/IModalInfoProps'

const ModalInfo = ({currentDate, handleCloseInfoModal, showInfoModal, goToUpdateScreen}: IModalInfoProps) => {
  return (
    <Modal show={showInfoModal} onHide={handleCloseInfoModal} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"><h3>Information date:</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td><p className="fs-5"><strong className="pe-2">Name Pet:</strong> {currentDate.petName}</p></td>
                <td><p className="fs-5"><strong className="pe-2">Owner Pet Name:</strong> {currentDate.ownerName}</p></td>
              </tr>
              <tr>
                <td><p className="fs-5 "><strong className="pe-2">Date:</strong> {currentDate.date}</p></td>
                <td><p className="fs-5"><strong className="pe-2">Time:</strong> {currentDate.time}</p></td>
              </tr>
              <tr>
                <td colSpan={2}><p className="fs-5 text-break"><strong className="pe-2">Symtoms:</strong> {currentDate.symptoms}</p></td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseInfoModal}>
            Back
          </Button>
          <Button variant="warning" onClick={ () => goToUpdateScreen(currentDate.Id)}>
            Update Date
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default ModalInfo