import * as S from './style'
import * as SVG from 'assets/svg'
import Image from 'next/image'
import Link from 'next/link'
import { getBookmark } from 'api/employment'
import { getImgUrl } from 'utils/getImgUrl'
import { EmployListProps } from 'types/components/Employ'

const PostItem = ({ id, title, img1, user, date }: EmployListProps) => {
  const bookmark = async () => {
    await getBookmark(id)
  }
  const url = getImgUrl(img1)

  return (
    <Link href={`/detail/${id}`} passHref>
      <S.Wrapper>
        <S.Thumbnail>
          {img1 && (
            <Image
              alt="Thumbnail img"
              src={url}
              sizes="100%"
              layout="fill"
              priority={true}
            />
          )}
        </S.Thumbnail>
        <S.ItemContent>
          <S.Title>{title}</S.Title>
          <S.Company>{user.username}</S.Company>
          <S.Text>{date}</S.Text>
        </S.ItemContent>
        <S.Bookmark
          onClick={(e) => {
            e.stopPropagation()
            bookmark()
          }}
        >
          {true ? <SVG.BookmarkIcon /> : <SVG.BookmarkcheckIcon />}
        </S.Bookmark>
      </S.Wrapper>
    </Link>
  )
}

export default PostItem
