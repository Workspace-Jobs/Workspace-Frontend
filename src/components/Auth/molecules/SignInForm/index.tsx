import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import AuthInput from 'components/Auth/atoms/AuthInput'
import { AuthForm } from 'types'
import { RegexsData } from 'assets/data/RegexsData'
import {
  BottomText,
  BottonWrapper,
  InputsWrapper,
} from 'components/Auth/atoms/AuthStyle/style'
import Button from 'components/Auth/atoms/Button'
import { isNotNull } from 'utils/isNotNull'
import Link from 'next/link'

const SignInForm = () => {
  const { register, watch, handleSubmit } = useForm<AuthForm>()

  const onSubmit: SubmitHandler<AuthForm> = (e) => {
    console.log(e)
  }
  const onError: SubmitErrorHandler<AuthForm> = (e) => {
    console.log(e)
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
      </InputsWrapper>
      <BottonWrapper>
        <Button
          text={'로그인하기'}
          type="submit"
          onClick={handleSubmit(onSubmit, onError)}
        />
        <Link href={'signup'}>
          <BottomText>계정이 없으신가요? 회원가입하기</BottomText>
        </Link>
      </BottonWrapper>
    </>
  )
}

export default SignInForm
