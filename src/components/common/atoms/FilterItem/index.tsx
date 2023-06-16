import { FilterItemProps } from 'types/common/FilterItem'
import * as S from './style'

const FilterItem = ({ menu, active, onClick }: FilterItemProps) => {
  return (
    <S.FilterItem active={active} onClick={() => onClick(menu)}>
      {menu}
    </S.FilterItem>
  )
}

export default FilterItem
