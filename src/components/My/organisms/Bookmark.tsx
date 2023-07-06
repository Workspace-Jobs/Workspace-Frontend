import { getMyBookmarkList } from 'api/my'
import Announcement from 'components/Home/molecules/Announcement'
import CommonTitle from 'components/common/atoms/CommonTitle'
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style'
import { useEffect, useState } from 'react'
import { EmployListProps, EmploylistType } from 'types/components/Employ'

const Bookmark = () => {
  const [list, setList] = useState<EmployListProps[]>()
  useEffect(() => {
    getMyBookmarkList().then((res) => {
      setList(res?.data)
    })
  }, [])

  return (
    <CommonTemplate>
      <CommonTitle title="북마크" />
      {list?.length == 0 ? '북마크가 없어요' : <Announcement list={list} />}
    </CommonTemplate>
  )
}

export default Bookmark
