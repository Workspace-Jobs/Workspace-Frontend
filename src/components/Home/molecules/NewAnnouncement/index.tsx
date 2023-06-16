import * as S from './style'
import NewListItem from 'components/Home/atoms/NewPostItem'
import Profile from 'components/Home/atoms/Profile'

const NewAnnouncement = () => {
  return (
    <S.Section>
      <S.Wrapper>
        <S.Title>최신 공고</S.Title>
        <S.ListWrapper>
          <NewListItem />
          <NewListItem />
          <NewListItem />
          <NewListItem />
          <Profile />
        </S.ListWrapper>
      </S.Wrapper>
    </S.Section>
  )
}

export default NewAnnouncement
