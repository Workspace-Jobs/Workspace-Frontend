import CommunityItem from 'components/Community/atoms/CommunityItem'
import * as S from './style'
import { LikeListProps } from 'types/components/My'

const LikeContent = ({ list }: { list: LikeListProps[] | undefined }) => {
  return (
    <S.Wrapper>
      {list &&
        list?.map((e, ind) => (
          <CommunityItem
            key={ind}
            id={e.nb.id}
            user={e.nb.user}
            title={e.nb.title}
            good_cnt={e.nb.good_cnt}
            created_date={e.nb.created_date}
          />
        ))}
    </S.Wrapper>
  )
}

export default LikeContent
