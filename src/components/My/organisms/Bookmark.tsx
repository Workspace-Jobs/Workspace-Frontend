import Announcement from 'components/Home/molecules/Announcement'
import CommonTitle from 'components/common/atoms/CommonTitle'
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style'

const Bookmark = () => {
  return (
    <CommonTemplate>
      <CommonTitle title="북마크" />
      <Announcement />
    </CommonTemplate>
  )
}

export default Bookmark
