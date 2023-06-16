export interface FilterItemProps {
  menu: string
  active: 'true' | 'false'
  onClick: (filterMenu: string) => void
}
