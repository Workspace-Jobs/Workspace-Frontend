import * as S from './style'

const CommunityWrite = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <input placeholder="제목(1~60자)" maxLength={60} />
        <p>2023.03.03</p>
      </S.Header>
      <textarea placeholder="내용(1~5000자)" maxLength={5000} />
    </S.Wrapper>
  )
}

export default CommunityWrite
