import { coDetailData, isCommunityWrite, likeState } from 'Atoms/recoilAtom'
import { getCommunityDetail } from 'api/community'
import CommonTitle from 'components/common/atoms/CommonTitle'
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import CommunityContent from '../molecules/CommunityContent'
import CommunityWrite from '../molecules/CommunityWrite'
import LeftContent from '../molecules/LeftContent'
import { CommunityTemplate } from './style'

const CommunityDetail = () => {
  const route = useRouter()
  const id = route.query.communityID ?? ''
  const setData = useSetRecoilState(coDetailData)
  const like = useRecoilValue(likeState)
  const isWrite = useRecoilValue(isCommunityWrite)

  useEffect(() => {
    getCommunityDetail(id).then((res) => {
      setData(res?.data)
    })
  }, [id, like])

  return (
    <CommonTemplate>
      <CommonTitle title="커뮤니티" />
      <CommunityTemplate>
        <LeftContent state="detail" />
        {isWrite ? <CommunityWrite /> : <CommunityContent />}
      </CommunityTemplate>
    </CommonTemplate>
  )
}

export default CommunityDetail
