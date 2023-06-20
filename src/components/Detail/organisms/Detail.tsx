import { CommonTemplate } from 'components/common/templates/CommonTemplate/style'
import { EmployDetailProps } from 'types/components/Detail'
import ApplyBoard from '../molecules/ApplyBoard'
import PostBoard from '../molecules/PostBoard'
import SuggestPost from '../molecules/SuggestPost'
import { DetailTemplate } from './style'

const Detail = ({ detailDatas }: { detailDatas: EmployDetailProps }) => {
  return (
    <CommonTemplate>
      <DetailTemplate>
        <PostBoard detailDatas={detailDatas} />
        <ApplyBoard detailDatas={detailDatas} />
      </DetailTemplate>
      <SuggestPost />
    </CommonTemplate>
  )
}
export default Detail
