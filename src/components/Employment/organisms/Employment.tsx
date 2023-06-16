import Announcement from 'components/Home/molecules/Announcement'
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style'
import Filter from '../molecules/Filter'

const Employment = () => {
  return (
    <CommonTemplate>
      <Filter />
      <Announcement />
    </CommonTemplate>
  )
}

export default Employment
