import { CommonTemplate } from 'components/common/templates/CommonTemplate/style'
import ApplyBoard from '../molecules/ApplyBoard'
import PostBoard from '../molecules/PostBoard'
import SuggestPost from '../molecules/SuggestPost'
import { DetailTemplate } from './style'

const Detail = () => {
  return (
    <CommonTemplate>
      <DetailTemplate>
        <PostBoard />
        <ApplyBoard />
      </DetailTemplate>
      <SuggestPost />
    </CommonTemplate>
  )
}
export default Detail
