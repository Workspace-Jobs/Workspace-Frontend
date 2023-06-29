import { CommentListProps } from 'types/components/Community'
import * as S from './style'
import dateFillter from 'utils/dateFillter'

const CommentItem = ({ id, user, nb, date, centent }: CommentListProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <p>{user}</p>
        <p>{dateFillter(date)}</p>
      </S.Header>
      <S.Content>{centent}</S.Content>
    </S.Wrapper>
  )
}

export default CommentItem
