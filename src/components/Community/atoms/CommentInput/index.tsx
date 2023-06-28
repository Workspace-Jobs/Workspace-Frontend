import * as S from './style'

const CommentInput = () => {
  return (
    <S.Wrapper>
      <p>myname</p>
      <textarea placeholder="댓글 작성하기" />
      <S.Button>등록하기</S.Button>
    </S.Wrapper>
  )
}

export default CommentInput
