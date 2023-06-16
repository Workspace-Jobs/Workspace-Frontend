import * as S from './style'
import * as SVG from 'assets/svg'

const InfoBox = () => {
  return (
    <S.Wrapper>
      <S.Title>React 프론트엔드 개발자</S.Title>
      <S.BtnWrapper>
        <S.BookmarkBtn>
          {true ? (
            <>
              <SVG.BookmarkIcon />
              북마크하기
            </>
          ) : (
            <>
              <SVG.BookmarkcheckIcon />
              북마크완료
            </>
          )}
        </S.BookmarkBtn>
        <S.ApplyBtn>
          <>{'D-5'} 지원하기</>
        </S.ApplyBtn>
      </S.BtnWrapper>
      <S.SmallText>
        이 공고에 지원해 최종합격이 되시면 지원자님께 취업축하금 50만원을
        드립니다.
      </S.SmallText>
    </S.Wrapper>
  )
}

export default InfoBox
