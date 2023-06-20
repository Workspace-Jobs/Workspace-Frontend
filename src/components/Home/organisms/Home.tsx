import { CommonTemplate } from 'components/common/templates/CommonTemplate/style'
import Announcement from '../molecules/Announcement'
import NewAnnouncement from '../molecules/NewAnnouncement'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { pageNum } from 'Atoms/recoilAtom'
import { getEmployment } from 'api/employment'

const Home = () => {
  const [page, setPage] = useRecoilState(pageNum)
  const [listData, setListData] = useState()
  useEffect(() => {
    getEmployment(page).then((res) => {
      setListData(res?.data)
    })
  }, [])

  return (
    <CommonTemplate>
      <NewAnnouncement list={listData} />
      <Announcement list={listData} />
    </CommonTemplate>
  )
}

export default Home
