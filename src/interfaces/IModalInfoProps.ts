import { IDates } from "./IDates"

export interface IModalInfoProps {
  showInfoModal: boolean,
  handleCloseInfoModal: () => void
  goToUpdateScreen: () => void
  currentDate: IDates
}