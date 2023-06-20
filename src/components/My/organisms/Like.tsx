import CommonTitle from 'components/common/atoms/CommonTitle'
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style'
import LikeContent from '../molecules/LikeContent'
import { MyTemplate } from './style'
import { getMyLikeList } from 'api/my'
import { useEffect, useState } from 'react'
import { LikeListProps } from 'types/components/My'

const Like = () => {
  const [list, setList] = useState<LikeListProps[]>()
  useEffect(() => {
    getMyLikeList().then((res) => {
      console.log(res?.data)
      setList(res?.data)
    })
  }, [])

  return (
    <CommonTemplate>
      <CommonTitle title="좋아요" />
      <MyTemplate>
        <LikeContent list={list} />
      </MyTemplate>
    </CommonTemplate>
  )
}

export default Like
