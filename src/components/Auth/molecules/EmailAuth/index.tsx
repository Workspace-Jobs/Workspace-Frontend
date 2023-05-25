import * as S from './style'
import Button from 'components/Auth/atoms/Button'
import Link from 'next/link'

const EmailAuth = () => {
  const emailLink = 'https://mail.google.com'

  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Title>이메일주소를 인증해주세요.</S.Title>
        <S.Description>
          이메일 인증을 위한 메일이 발송되었습니다.
          <br /> 회원가입 완료를 위한 이메일 인증을 진행 해 주세요.
        </S.Description>
        <S.Caution>메일이 도착하지않았다면 스팸함을 확인해주세요.</S.Caution>
      </S.TextWrapper>
      <Link href={emailLink}>
        <a target="_blank">
          <Button text={'인증하러가기'} type="button" />
        </a>
      </Link>
    </S.Wrapper>
  )
}

export default EmailAuth
