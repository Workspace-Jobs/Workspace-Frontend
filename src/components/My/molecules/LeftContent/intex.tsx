import * as S from './style'
import Profile from 'components/common/molecules/Profile'
import Button from 'components/Community/atoms/Button'
import { useRouter } from 'next/router'
import { Palette } from 'styles/globals'
import { logout } from 'utils/Libs/logout'

const LeftContent = () => {
  const router = useRouter()
  const onLogout = () => {
    logout()
    router.push('/auth/signin')
  }

  return (
    <S.Wrapper>
      <Profile />
      <Button
        content="로그아웃"
        color={Palette.SYSTEM_ERROR}
        onClick={() => onLogout()}
      />
    </S.Wrapper>
  )
}
export default LeftContent
