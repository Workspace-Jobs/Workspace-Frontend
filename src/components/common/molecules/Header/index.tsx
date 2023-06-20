import { isLoginValue, userId, userName, userProfile } from 'Atoms/recoilAtom'
import { getMyInfo } from 'api/my'
import * as SVG from 'assets/svg'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { getImgUrl } from 'utils/getImgUrl'
import { isLogin } from 'utils/isLogin'
import * as S from './style'

const Header = () => {
  const router = useRouter()
  const path = router.pathname
  const [userImg, setUserImg] = useRecoilState(userProfile)
  const [login, setLogin] = useRecoilState(isLoginValue)
  const [name, setName] = useRecoilState(userName)
  const setId = useSetRecoilState(userId)

  useEffect(() => {
    isLogin().then((res) => {
      if (!res) return setLogin(false)
      if (res) {
        getMyInfo().then((res) => {
          setId(res?.data.id)
          setName(res?.data.username)
          setUserImg(getImgUrl(res?.data.profile))
          setLogin(true)
        })
      }
    })
  }, [])

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
          {login ? (
            <div onClick={() => router.push('/my')}>
              <S.ProfilImg>
                {userImg !== '' && (
                  <Image
                    alt="Thumbnail img"
                    src={userImg}
                    sizes="100%"
                    layout="fill"
                    priority={true}
                  />
                )}
              </S.ProfilImg>
              {name}
            </div>
          ) : (
            <Link href={'/auth/signup'}>
              <p>회원가입/로그인</p>
            </Link>
          )}
        </S.UserInfo>
      </S.HeaderWrapper>
    </S.Header>
  )
}

export default Header
