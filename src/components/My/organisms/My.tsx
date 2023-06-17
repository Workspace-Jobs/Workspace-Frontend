import CommonTitle from 'components/common/atoms/CommonTitle'
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style'
import { MyTemplate } from './style'
import MyContent from '../molecules/MyContent'
import LeftContent from '../molecules/LeftContent/intex'

const My = () => {
  return (
    <CommonTemplate>
      <CommonTitle title="My Workspace" />
      <MyTemplate>
        <LeftContent />
        <MyContent />
      </MyTemplate>
    </CommonTemplate>
  )
}

export default My
