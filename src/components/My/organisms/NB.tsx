import { getMynb } from 'api/my'
import CommonTitle from 'components/common/atoms/CommonTitle'
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style'
import { useEffect, useState } from 'react'
import { LikeListProps } from 'types/components/My'
import MynbContent from '../molecules/MynbContent'
import { MyTemplate } from './style'

const NB = () => {
  const [list, setList] = useState<LikeListProps[]>()
  useEffect(() => {
    getMynb().then((res) => {
      setList(res?.data)
    })
  }, [])

  return (
    <CommonTemplate>
      <CommonTitle title="내 글" />
      <MyTemplate>{/* <MynbContent list={list} /> */}</MyTemplate>
    </CommonTemplate>
  )
}

export default NB
