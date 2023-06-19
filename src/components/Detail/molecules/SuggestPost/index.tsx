import Announcement from 'components/Home/molecules/Announcement'
import * as S from './style'
import { useRecoilState } from 'recoil'
import { pageNum } from 'Atoms/recoilAtom'
import { useEffect, useState } from 'react'
import { getEmployment } from 'api/employment'

const SuggestPost = () => {
  const [page, setPage] = useRecoilState(pageNum)
  const [listData, setListData] = useState()
  useEffect(() => {
    getEmployment(page).then((res) => {
      setListData(res?.data)
    })
  }, [])
  return (
    <S.Wrapper>
      <S.Title>여기는 어떤가요?</S.Title>
      <Announcement list={listData} />
    </S.Wrapper>
  )
}

export default SuggestPost
