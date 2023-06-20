import { AuthFormWrapper, Wrapper } from '../atoms/AuthStyle/style'
import SignHeader from '../molecules/AuthHeader'
import SignInForm from '../molecules/SignInForm'

const SignIn = () => {
  return (
    <Wrapper>
      <AuthFormWrapper>
        <SignHeader />
        <SignInForm />
      </AuthFormWrapper>
    </Wrapper>
  )
}

export default SignIn
