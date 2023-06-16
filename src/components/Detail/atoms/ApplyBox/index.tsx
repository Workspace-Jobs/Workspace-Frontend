import ResumeItem from '../ResumeItem'
import * as S from './style'

const ApplyBox = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <p>뒤로</p>지원하기
      </S.Header>
      <S.InfoWrapper>
        <S.Title>지원정보</S.Title>
        <S.UserInputWrapper>
          <S.UserInput>
            <p>이름</p>
            <input />
          </S.UserInput>
          <S.UserInput>
            <p>이메일</p>
            <input />
          </S.UserInput>
          <S.UserInput>
            <p>연락처</p>
            <input />
          </S.UserInput>
        </S.UserInputWrapper>
      </S.InfoWrapper>
      <S.InfoWrapper>
        <S.Title>이력서</S.Title>
        <S.UserInputWrapper>
          {['1', '2', '3'].map((i, e) => (
            <ResumeItem key={e} item={i} onClick={() => ''} active={i == '1'} />
          ))}
          <S.ApplyBtn>지원하기</S.ApplyBtn>
        </S.UserInputWrapper>
      </S.InfoWrapper>
    </S.Wrapper>
  )
}

export default ApplyBox
