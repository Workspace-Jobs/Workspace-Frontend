import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import AuthInput from 'components/Auth/atoms/AuthInput'
import { AuthForm } from 'types/components/Auth'
import { RegexsData } from 'assets/data/RegexsData'
import {
  BottomText,
  BottonWrapper,
  InputsWrapper,
} from 'components/Auth/atoms/AuthStyle/style'
import Button from 'components/Auth/atoms/Button'
import { isNotNull } from 'utils/isNotNull'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { signup } from 'api/member'

const SignUpForm = ({ setLocate }: { setLocate: (locate: number) => void }) => {
  const { register, watch, handleSubmit } = useForm<AuthForm>()

  const onSubmit: SubmitHandler<AuthForm> = async (e) => {
    if (e.password !== e.passwordCheck)
      return toast.error('비밀번호확인과 비밀번호가 다릅니다.')
    if (await signup(e.email, e.password, e.passwordCheck)) {
      setLocate(2)
    }
  }
  const onError: SubmitErrorHandler<AuthForm> = (e) => {
    toast.error(
      e.email?.message || e.password?.message || e.passwordCheck?.message,
    )
  }

  return (
    <>
      <InputsWrapper>
        <div>
          <p>이메일</p>
          <AuthInput
            register={register('email', {
              required: '이메일을 입력해주세요.',
              pattern: {
                value: RegexsData.EMAIL,
                message: '이메일형식에 맞게 입력해주세요.',
              },
            })}
            type="text"
            placeholder="이메일을 입력해주세요."
          />
        </div>
        <div>
          <p>비밀번호</p>
          <AuthInput
            register={register('password', {
              required: '비밀번호를 입력해주세요.',
              pattern: {
                value: RegexsData.PASSWORD,
                message: '영문,숫자,특수문자 포함 8~20자로 입력해주세요.',
              },
            })}
            type="password"
            placeholder="영문,숫자,특수문자 포함 8~20자"
            maxLength={20}
            isValue={isNotNull(watch('password'))}
          />
        </div>
        <div>
          <p>비밀번호 확인</p>
          <AuthInput
            register={register('passwordCheck', {
              required: '비밀번호를 다시 입력해주세요.',
            })}
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
            maxLength={20}
            isValue={isNotNull(watch('passwordCheck'))}
          />
        </div>
      </InputsWrapper>
      <BottonWrapper>
        <Button
          text={'회원가입하기'}
          type="submit"
          onClick={handleSubmit(onSubmit, onError)}
        />
        <Link href={'signin'}>
          <BottomText>이미 계정이 있신가요? 로그인하기</BottomText>
        </Link>
      </BottonWrapper>
    </>
  )
}

export default SignUpForm
