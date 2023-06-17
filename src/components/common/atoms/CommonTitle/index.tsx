import * as S from './style'

const CommonTitle = ({ title }: { title: string }) => {
  return (
    <S.Section>
      <S.Wrapper>{title}</S.Wrapper>
    </S.Section>
  )
}

export default CommonTitle
