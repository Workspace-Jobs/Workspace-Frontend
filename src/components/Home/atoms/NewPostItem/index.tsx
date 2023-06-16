import * as S from './style'
import Link from 'next/link'

const NewPostItem = () => {
  return (
    <Link href={'/'} passHref>
      <S.Wrapper>
        <S.Title>React 프론트엔드 개발자</S.Title>
        <S.Company>여보야</S.Company>
        <S.Location>광주</S.Location>
        <S.D_Day>D-5</S.D_Day>
      </S.Wrapper>
    </Link>
  )
}

export default NewPostItem
