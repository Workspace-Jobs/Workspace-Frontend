import * as S from './style'
import * as SVG from 'assets/svg'
import Link from 'next/link'

const Profile = () => {
  return (
    <S.Wrapper>
      <S.Title>
        {true ? (
          <Link href="/auth/signup" passHref>
            <div>
              <SVG.LogoutIcon />
              회원가입/로그인하기
            </div>
          </Link>
        ) : (
          <>
            손정민님 반가워요 👋
            <p onClick={() => console.log('logout')}>로그아웃</p>
          </>
        )}
      </S.Title>
      <S.ContentWrapper>
        <Link href="/profile">
          <S.Content>
            <SVG.ProfileIcon />
            프로필
          </S.Content>
        </Link>
        <Link href="resume">
          <S.Content>
            <SVG.ResumeIcon />
            이력서 추가
          </S.Content>
        </Link>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default Profile
