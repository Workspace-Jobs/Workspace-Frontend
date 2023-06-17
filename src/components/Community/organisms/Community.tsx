import CommonTitle from 'components/common/atoms/CommonTitle'
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style'
import CommunityList from '../molecules/CommunityList'
import LeftContent from '../molecules/LeftContent/intex'
import { CommunityTemplate } from './style'
import CommunityWrite from '../molecules/CommunityWrite'
import { useRecoilValue } from 'recoil'
import { isCommunityWrite } from 'Atoms/recoilAtom'

const Community = () => {
  const isWrite = useRecoilValue(isCommunityWrite)

  return (
    <CommonTemplate>
      <CommonTitle title="커뮤니티" />
      <CommunityTemplate>
        <LeftContent />
        {isWrite ? <CommunityWrite /> : <CommunityList />}
      </CommunityTemplate>
    </CommonTemplate>
  )
}

export default Community
