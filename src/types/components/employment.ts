import { ModalType } from 'types/common/Modal'

export interface FilterType extends ModalType {
  menu: string
  onClick: (filterMenu: string) => void
}
