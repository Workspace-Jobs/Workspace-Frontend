import { coFilterMenu } from 'Atoms/recoilAtom'
import CommunityFilter from 'components/Community/atoms/CommunityFilter'
import CommunityItem from 'components/Community/atoms/CommunityItem'
import { useRecoilState } from 'recoil'
import * as S from './style'
import { CommunitylistType } from 'types/components/Community'

const CommunityList = ({ list }: CommunitylistType) => {
  const [filterMenu, setFilterMenu] = useRecoilState(coFilterMenu)

  return (
    <S.Wrapper>
      <CommunityFilter menu={filterMenu} onClick={setFilterMenu} />
      {list?.map((e, ind) => (
        <CommunityItem
          key={ind}
          id={e.id}
          user={e.user}
          title={e.title}
          good_cnt={e.good_cnt}
          created_date={e.created_date}
        />
      ))}
    </S.Wrapper>
  )
}

export default CommunityList
