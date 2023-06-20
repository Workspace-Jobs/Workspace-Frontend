import { coFilterMenu, isCommunityWrite, pageNum } from 'Atoms/recoilAtom'
import { getCommunityList, getTagCommunityList } from 'api/community'
import CommonTitle from 'components/common/atoms/CommonTitle'
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import CommunityList from '../molecules/CommunityList'
import CommunityWrite from '../molecules/CommunityWrite'
import LeftContent from '../molecules/LeftContent'
import { CommunityTemplate } from './style'

const Community = () => {
  const isWrite = useRecoilValue(isCommunityWrite)
  const [page, setPage] = useRecoilState(pageNum)
  const [listData, setListData] = useState()
  const menu = useRecoilValue(coFilterMenu)

  useEffect(() => {
    menu === '전체'
      ? getCommunityList(page).then((res) => {
          setListData(res?.data)
        })
      : getTagCommunityList(page, menu).then((res) => {
          setListData(res?.data)
        })
  }, [menu, isWrite])

  return (
    <CommonTemplate>
      <CommonTitle title="커뮤니티" />
      <CommunityTemplate>
        <LeftContent />
        {isWrite ? <CommunityWrite /> : <CommunityList list={listData} />}
      </CommunityTemplate>
    </CommonTemplate>
  )
}

export default Community
