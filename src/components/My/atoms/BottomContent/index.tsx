import * as S from './style'
import * as SVG from 'assets/svg'
import PostItem from 'components/Home/atoms/PostItem'
import CommunityItem from 'components/Community/atoms/CommunityItem'
import Link from 'next/link'

const BottomContent = () => {
  return (
    <div>
      <S.Wrapper>
        <Link href="/my/bookmark">
          <S.Header>
            <p>북마크</p>
            <SVG.ArrowIcon />
          </S.Header>
        </Link>
        <S.ContentWrapper>
          {/* <PostItem />
          <PostItem />
          <PostItem /> */}
        </S.ContentWrapper>
      </S.Wrapper>
      <S.Wrapper>
        <Link href="/my/like">
          <S.Header>
            <p>좋아요</p>
            <SVG.ArrowIcon />
          </S.Header>
        </Link>
        <S.ContentWrapper>
          <div>
            {/* <CommunityItem />
            <CommunityItem />
            <CommunityItem />
            <CommunityItem />
            <CommunityItem /> */}
          </div>
        </S.ContentWrapper>
      </S.Wrapper>
      <S.Wrapper>
        <Link href="/my/asd">
          <S.Header>
            <p>내 글</p>
            <SVG.ArrowIcon />
          </S.Header>
        </Link>
        <S.ContentWrapper>
          <div></div>
        </S.ContentWrapper>
      </S.Wrapper>
    </div>
  )
}

export default BottomContent
