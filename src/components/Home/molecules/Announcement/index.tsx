import ListItem from 'components/Home/atoms/PostItem'
import * as S from './style'

const Announcement = () => {
  return (
    <S.Section>
      <S.Wrapper>
        {[1, 2, 3, 4, 5].map((e) => (
          <ListItem key={e} />
        ))}
      </S.Wrapper>
    </S.Section>
  )
}

export default Announcement
