import Link from 'next/link'
import * as S from './style'

const CommunityItem = () => {
  return (
    <Link href="/community/1" passHref>
      <S.Wrapper>
        <S.SubText size={'12px'}>123</S.SubText>
        <S.SubText size={'16px'}>TITLE</S.SubText>
        <S.SubText size={'12px'}>2023.03.03</S.SubText>
      </S.Wrapper>
    </Link>
  )
}

export default CommunityItem
