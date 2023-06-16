import { CommonTemplate } from 'components/common/templates/CommonTemplate/style'
import Announcement from '../molecules/Announcement'
import NewAnnouncement from '../molecules/NewAnnouncement'

const Home = () => {
  return (
    <CommonTemplate>
      <NewAnnouncement />
      <Announcement />
    </CommonTemplate>
  )
}

export default Home
