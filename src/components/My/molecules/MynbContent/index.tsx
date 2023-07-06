import CommunityItem from 'components/Community/atoms/CommunityItem'
import { MynbListProps } from 'types/components/My'
import * as S from './style'

const MynbContent = ({ list }: { list: MynbListProps[] | undefined }) => {
  return (
    <S.Wrapper>
      {list &&
        list?.map((e, ind) => (
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

export default MynbContent
