import { EmployListProps } from 'types/components/employment'
import * as S from './style'
import Link from 'next/link'
import Image from 'next/image'
import { getImgUrl } from 'utils/getImgUrl'

const NewPostItem = ({ id, title, img1, user, date }: EmployListProps) => {
  const url = getImgUrl(img1)
  return (
    <Link href={`detail/${id}`} passHref>
      <S.Wrapper>
        <S.ProfilImg>
          <Image
            alt="Thumbnail img"
            src={url}
            sizes="100%"
            layout="fill"
            priority={true}
          />
        </S.ProfilImg>
        <S.Title>{title}</S.Title>
        <S.Company>{user.username}</S.Company>
        <S.D_Day>
          <p>{date}</p>
        </S.D_Day>
      </S.Wrapper>
    </Link>
  )
}

export default NewPostItem
