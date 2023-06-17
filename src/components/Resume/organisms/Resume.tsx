import CommonTitle from 'components/common/atoms/CommonTitle'
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style'
import { ResumeTemplate } from '../style'
import ResumeList from '../molecules/ResumeList/intex'

const Resume = () => {
  return (
    <CommonTemplate>
      <CommonTitle title="내 이력서" />
      <ResumeTemplate>
        <ResumeList />
      </ResumeTemplate>
    </CommonTemplate>
  )
}

export default Resume
