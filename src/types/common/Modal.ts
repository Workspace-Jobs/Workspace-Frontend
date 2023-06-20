export interface ModalStyleProps {
  isClick: boolean
}

export interface ModalType {
  modalState: boolean
  setModalState: (state: boolean) => void
}
