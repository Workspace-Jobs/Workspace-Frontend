import CommonTitle from 'components/common/atoms/CommonTitle'
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style'
import { CommunityTemplate } from './style'
import LeftContent from '../molecules/LeftContent/intex'
import CommunityContent from '../molecules/CommunityContent'

const CommunityDetail = () => {
  return (
    <CommonTemplate>
      <CommonTitle title="커뮤니티" />
      <CommunityTemplate>
        <LeftContent state="detail" />
        <CommunityContent />
      </CommunityTemplate>
    </CommonTemplate>
  )
}

export default CommunityDetail
