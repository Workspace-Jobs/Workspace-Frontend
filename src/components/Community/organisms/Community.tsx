import CommonTitle from 'components/common/atoms/CommonTitle'
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style'
import { CommunityTemplate } from './style'
import Profile from '../molecules/Profile'
import CommunityList from '../molecules/CommunityList'

const Community = () => {
  return (
    <CommonTemplate>
      <CommonTitle title="커뮤니티" />
      <CommunityTemplate>
        <Profile />
        <CommunityList />
      </CommunityTemplate>
    </CommonTemplate>
  )
}

export default Community
