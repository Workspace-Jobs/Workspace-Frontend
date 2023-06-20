import Link from 'next/link'
import * as S from './style'
import { CommunityListProps } from 'types/components/Community'
import dateFillter from 'utils/dateFillter'

const CommunityItem = ({
  id,
  user,
  title,
  created_date,
}: CommunityListProps) => {
  return (
    <Link href={`/community/${id}`} passHref>
      <S.Wrapper>
        <S.SubText size={'12px'}>{id}</S.SubText>
        <S.SubText size={'16px'}>{title}</S.SubText>
        <S.SubText size={'12px'}>{dateFillter(created_date)}</S.SubText>
      </S.Wrapper>
    </Link>
  )
}

export default CommunityItem
