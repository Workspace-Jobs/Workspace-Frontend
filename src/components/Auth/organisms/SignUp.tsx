import { useState } from 'react'
import { AuthFormWrapper } from '../atoms/AuthStyle/style'
import SignHeader from '../molecules/AuthHeader'
import SignUpForm from '../molecules/SignUpForm'
import EmailAuth from '../molecules/EmailAuth'

const SignUp = () => {
  const [locate, setLocate] = useState(1)

  return (
    <AuthFormWrapper>
      <SignHeader />
      {locate && locate == 1 ? (
        <SignUpForm setLocate={setLocate} />
      ) : (
        <EmailAuth />
      )}
    </AuthFormWrapper>
  )
}

export default SignUp
