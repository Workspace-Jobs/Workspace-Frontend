import { CommunityFilterData } from 'assets/data/FilterData'
import * as S from './style'
import FilterItem from 'components/common/atoms/FilterItem'

const CommunityFilter = ({
  menu,
  onClick,
  style,
}: {
  menu: string
  onClick: (filterMenu: string) => void
  style?: string
}) => {
  return (
    <S.Wrapper style={{ border: `${style}`, padding: `${style ? '0' : ''}` }}>
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
