import * as S from './style'
import * as SVG from 'assets/svg'
import Image from 'next/image'
import Th from 'assets/png/image.png'
import Link from 'next/link'

const PostItem = () => {
  return (
    <Link href={'/detail'} as={'detail/1'} passHref>
      <S.Wrapper>
        <S.Thumbnail>
          <Image alt="Thumbnail img" src={Th} sizes="100%" priority={true} />
        </S.Thumbnail>
        <S.ItemContent>
          <S.Title>React 프론트엔드 개발자</S.Title>
          <S.Company>여보야</S.Company>
          <S.Text>광주</S.Text>
          <S.Text>D-5</S.Text>
        </S.ItemContent>
        <S.Bookmark
          onClick={(e) => {
            e.stopPropagation()
            console.log('bookmark')
          }}
        >
          {true ? <SVG.BookmarkIcon /> : <SVG.BookmarkcheckIcon />}
        </S.Bookmark>
      </S.Wrapper>
    </Link>
  )
}

export default PostItem
