import { ModalType } from 'types/common/Modal'

export interface FilterType extends ModalType {
  menu: string
  onClick: (filterMenu: string) => void
}

export interface EmployListProps {
  id: number
  title: string
  img1: string
  user: {
    id: number
    username: string
    location: string
  }
  date: string
}

export interface EmploylistType {
  list: EmployListProps[] | undefined
}
