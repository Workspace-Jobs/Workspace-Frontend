import { useRecoilValue } from 'recoil'
import * as S from './style'
import { userName } from 'Atoms/recoilAtom'
import { useState } from 'react'
import { postComment } from 'api/community'

const CommentInput = ({ id }: { id: number }) => {
  const name = useRecoilValue(userName)
  const [content, setContent] = useState<string | undefined>()

  const onSubmint = () => {
    content && postComment(id, content)
    setContent('')
    location.reload()
  }

  return (
    <S.Wrapper>
      <p>{name}</p>
      <textarea
        placeholder="댓글 작성하기"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <S.Button onClick={() => onSubmint()}>등록하기</S.Button>
    </S.Wrapper>
  )
}

export default CommentInput
