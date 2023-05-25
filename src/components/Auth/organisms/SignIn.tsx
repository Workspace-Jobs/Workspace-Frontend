import { AuthFormWrapper } from '../atoms/AuthStyle/style'
import SignHeader from '../molecules/AuthHeader'
import SignInForm from '../molecules/SignInForm'

const SignIn = () => {
  return (
    <AuthFormWrapper>
      <SignHeader />
      <SignInForm />
    </AuthFormWrapper>
  )
}

export default SignIn
