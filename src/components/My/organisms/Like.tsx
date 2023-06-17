import CommonTitle from 'components/common/atoms/CommonTitle'
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style'
import LikeContent from '../molecules/LikeContent'
import { MyTemplate } from './style'

const Like = () => {
  return (
    <CommonTemplate>
      <CommonTitle title="좋아요" />
      <MyTemplate>
        <LikeContent />
      </MyTemplate>
    </CommonTemplate>
  )
}

export default Like
