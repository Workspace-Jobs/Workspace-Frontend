import Announcement from 'components/Home/molecules/Announcement'
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style'
import Filter from '../molecules/Filter'
import { getEmployment } from 'api/employment'
import { useRecoilState } from 'recoil'
import { pageNum } from 'Atoms/recoilAtom'
import { useEffect, useState } from 'react'

const Employment = () => {
  const [page, setPage] = useRecoilState(pageNum)
  const [listData, setListData] = useState()
  useEffect(() => {
    getEmployment(page).then((res) => {
      console.log(res?.data)
      setListData(res?.data)
    })
  }, [])

  return (
    <CommonTemplate>
      <Filter />
      <Announcement list={listData} />
    </CommonTemplate>
  )
}

export default Employment
