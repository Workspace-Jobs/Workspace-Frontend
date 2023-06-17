import * as S from './style'
import Profile from 'components/common/molecules/Profile'
import Button from 'components/Community/atoms/Button'
import { Palette } from 'styles/globals'

const LeftContent = () => {
  return (
    <S.Wrapper>
      <Profile />
      <Button content="로그아웃" color={Palette.SYSTEM_ERROR} />
    </S.Wrapper>
  )
}
export default LeftContent
