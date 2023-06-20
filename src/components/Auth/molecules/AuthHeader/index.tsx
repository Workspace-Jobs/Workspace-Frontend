import * as S from './style'
import { WorkspaceLogo } from 'assets/svg'

const SignHeader = () => {
  return (
    <S.HeaderWrapper>
      <WorkspaceLogo />
      <S.Info>
        <S.Title>채용의 모든것, 워크스페이스</S.Title>
        <S.STitle>
          우주만큼 넣은 채용시장, 워크스페이스에서 살펴보세요!
        </S.STitle>
      </S.Info>
    </S.HeaderWrapper>
  )
}

export default SignHeader
