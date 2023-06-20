import Announcement from 'components/Home/molecules/Announcement'
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style'
import Filter from '../molecules/Filter'
import { getEmployment, getJobEmployment } from 'api/employment'
import { useRecoilState, useRecoilValue } from 'recoil'
import { filterMenu, pageNum } from 'Atoms/recoilAtom'
import { useEffect, useState } from 'react'

const Employment = () => {
  const [page, setPage] = useRecoilState(pageNum)
  const [listData, setListData] = useState()
  const menu = useRecoilValue(filterMenu)

  useEffect(() => {
    menu === '개발 전체'
      ? getEmployment(page).then((res) => {
          setListData(res?.data)
        })
      : getJobEmployment(page, menu).then((res) => {
          setListData(res?.data)
        })
  }, [menu])

  return (
    <CommonTemplate>
      <Filter />
      <Announcement list={listData} />
    </CommonTemplate>
  )
}

export default Employment
