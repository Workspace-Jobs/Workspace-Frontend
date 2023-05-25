import SignUp from 'components/Auth/organisms/SignUp'
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style'
import { Palette } from 'styles/globals'

const SignUpPage = () => {
  return (
    <CommonTemplate color={Palette.BACKGROUND_BG}>
      <SignUp />
    </CommonTemplate>
  )
}

export default SignUpPage
