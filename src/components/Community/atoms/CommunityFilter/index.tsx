import { CommunityFilterData } from 'assets/data/FilterData'
import * as S from './style'
import FilterItem from 'components/common/atoms/FilterItem'

const CommunityFilter = ({
  menu,
  onClick,
}: {
  menu: string
  onClick: (filterMenu: string) => void
}) => {
  return (
    <S.Wrapper>
      {CommunityFilterData.map((e, ind) => (
        <FilterItem
          key={ind}
          menu={e}
          active={`${menu == e}`}
          onClick={onClick}
        />
      ))}
    </S.Wrapper>
  )
}

export default CommunityFilter
