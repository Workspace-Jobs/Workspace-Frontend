import * as S from './style'
import CommunityFilter from 'components/Community/atoms/CommunityFilter'
import CommunityItem from 'components/Community/atoms/CommunityItem'
import { useState } from 'react'

const CommunityList = () => {
  const [filterMenu, setFilterMenu] = useState('전체')

  return (
    <S.Wrapper>
      <CommunityFilter menu={filterMenu} onClick={setFilterMenu} />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e, ind) => (
        <CommunityItem key={ind} />
      ))}
    </S.Wrapper>
  )
}

export default CommunityList
