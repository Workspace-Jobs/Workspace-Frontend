import {
  coContent,
  coDetailData,
  coTitle,
  postFilterMenu,
} from 'Atoms/recoilAtom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import * as S from './style'
import CommunityFilter from 'components/Community/atoms/CommunityFilter'
import { useEffect } from 'react'

const CommunityWrite = () => {
  const [title, setTitle] = useRecoilState(coTitle)
  const [content, setContent] = useRecoilState(coContent)
  const [filterMenu, setFilterMenu] = useRecoilState(postFilterMenu)
  const [data, setData] = useRecoilState(coDetailData)

  useEffect(() => {
    if (!data) return

    setTitle(data?.title)
    setContent(data?.centent)
  }, [])

  return (
    <S.Wrapper>
      <CommunityFilter menu={filterMenu} onClick={setFilterMenu} style="none" />
      <S.Header>
        <input
          placeholder="제목(1~60자)"
          maxLength={60}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p>2023.03.03</p>
      </S.Header>
      <textarea
        placeholder="내용(1~5000자)"
        maxLength={5000}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </S.Wrapper>
  )
}

export default CommunityWrite
