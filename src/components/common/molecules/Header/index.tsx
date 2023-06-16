import Link from 'next/link'
import * as S from './style'
import * as SVG from 'assets/svg'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const path = router.pathname

  return (
    <S.Header>
      <S.HeaderWrapper>
        <Link href="/">
          <SVG.WorkspaceLogo2 />
        </Link>
        <S.MenuWrapper>
          <Link href="/employment" passHref>
            <S.Menu state={`${path === '/employment'}`}>채용정보</S.Menu>
          </Link>
          <Link href="/community" passHref>
            <S.Menu state={`${path === '/community'}`}>커뮤니티</S.Menu>
          </Link>
          <Link href="/resume" passHref>
            <S.Menu state={`${path === '/resume'}`}>이력서</S.Menu>
          </Link>
        </S.MenuWrapper>
        <S.UserInfo>
          <SVG.SearchIcon />
          <SVG.AlramIcon />
          <Link href={'/auth/signup'}>
            <p>회원가입/로그인</p>
          </Link>
        </S.UserInfo>
      </S.HeaderWrapper>
    </S.Header>
  )
}

export default Header
