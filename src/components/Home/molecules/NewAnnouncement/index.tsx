import * as S from './style'
import NewListItem from 'components/Home/atoms/NewPostItem'
import Profile from 'components/Home/atoms/Profile'
import { EmploylistType } from 'types/components/Employ'

const NewAnnouncement = ({ list }: EmploylistType) => {
  return (
    <S.Section>
      <S.Wrapper>
        <S.Title>최신 공고</S.Title>
        <S.ListWrapper>
          {list?.slice(0, 4).map((e) => (
            <NewListItem
              key={e.id}
              id={e.id}
              title={e.title}
              img1={e.img1}
              user={e.user}
              date={e.date}
            />
          ))}
          <Profile />
        </S.ListWrapper>
      </S.Wrapper>
    </S.Section>
  )
}

export default NewAnnouncement
