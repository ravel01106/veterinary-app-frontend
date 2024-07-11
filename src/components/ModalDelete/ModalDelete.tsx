import { Button, Modal } from "react-bootstrap"
import { IModalDeleteProps } from "../../interfaces/IModalDeleteProps"

const ModalDelete = ({ handleCloseDeleteModal, showDeleteModal, deleteDate}:IModalDeleteProps) => {
  return (
    <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} aria-labelledby="contained-modal-title-vcenter" centered>
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">WARNING!!!</Modal.Title>
    </Modal.Header>
    <Modal.Body>Are you sure to remove this date?</Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={handleCloseDeleteModal}>
        Back
      </Button>
      <Button variant="danger" onClick={deleteDate}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default ModalDelete