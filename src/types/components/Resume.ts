import { ModalType } from 'types/common/Modal'

export interface FilterType extends ModalType {
  menu: string
  onClick: (filterMenu: string) => void
}

export interface ResumeListProps {
  id: number
  user: number
  name: string
}

export interface ResumelistType {
  list: ResumeListProps[] | undefined
}
