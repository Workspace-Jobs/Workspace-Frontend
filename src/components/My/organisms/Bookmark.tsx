import { getMyBookmarkList } from 'api/my'
import Announcement from 'components/Home/molecules/Announcement'
import CommonTitle from 'components/common/atoms/CommonTitle'
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style'
import { useEffect, useState } from 'react'
import { BookmarkListProps } from 'types/components/My'

const Bookmark = () => {
  const [list, setList] = useState<BookmarkListProps[]>()
  useEffect(() => {
    getMyBookmarkList().then((res) => {
      setList(res?.data)
    })
  }, [])

  return (
    <CommonTemplate>
      <CommonTitle title="북마크" />
      {list?.length == 0 ? '없어요' : <></>}
      {/* <Announcement /> */}
    </CommonTemplate>
  )
}

export default Bookmark
