import ListItem from 'components/Home/atoms/PostItem'
import { EmploylistType } from 'types/components/employment'
import * as S from './style'

const Announcement = ({ list }: EmploylistType) => {
  return (
    <S.Section>
      <S.Wrapper>
        {list?.map((e) => (
          <ListItem
            key={e.id}
            id={e.id}
            title={e.title}
            img1={e.img1}
            user={e.user}
            date={e.date}
          />
        ))}
      </S.Wrapper>
    </S.Section>
  )
}

export default Announcement
