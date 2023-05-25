import SignIn from 'components/Auth/organisms/SignIn'
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style'
import { Palette } from 'styles/globals'

const SignInPage = () => {
  return (
    <CommonTemplate color={Palette.BACKGROUND_BG}>
      <SignIn />
    </CommonTemplate>
  )
}

export default SignInPage
