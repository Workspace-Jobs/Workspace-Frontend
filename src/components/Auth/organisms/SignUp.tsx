import { useState } from 'react'
import { AuthFormWrapper, Wrapper } from '../atoms/AuthStyle/style'
import SignHeader from '../molecules/AuthHeader'
import SignUpForm from '../molecules/SignUpForm'
import EmailAuth from '../molecules/EmailAuth'

const SignUp = () => {
  const [locate, setLocate] = useState(1)

  return (
    <Wrapper>
      <AuthFormWrapper>
        <SignHeader />
        {locate && locate == 1 ? (
          <SignUpForm setLocate={setLocate} />
        ) : (
          <EmailAuth />
        )}
      </AuthFormWrapper>
    </Wrapper>
  )
}

export default SignUp
