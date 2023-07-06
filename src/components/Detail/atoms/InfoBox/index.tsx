import { getBookmark } from 'api/employment'
import * as S from './style'
import * as SVG from 'assets/svg'
import { applyState } from 'Atoms/recoilAtom'
import { useSetRecoilState } from 'recoil'
import { DetailBoxProps } from 'types/components/Detail'

const InfoBox = ({ title, support_boool, id, bookmark }: DetailBoxProps) => {
  const setState = useSetRecoilState(applyState)

  const onBookmark = () => {
    getBookmark(id)
  }

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.BtnWrapper>
        <S.BookmarkBtn onClick={() => onBookmark()}>
          {bookmark ? (
            <>
              <SVG.BookmarkcheckIcon />
              북마크완료
            </>
          ) : (
            <>
              <SVG.BookmarkIcon />
              북마크하기
            </>
          )}
        </S.BookmarkBtn>
        <S.ApplyBtn onClick={() => !support_boool && setState(false)}>
          {support_boool ? '지원완료' : '지원하기'}
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
