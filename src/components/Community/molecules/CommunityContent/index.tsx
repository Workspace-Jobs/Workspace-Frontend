import { coDetailData, pageNum } from 'Atoms/recoilAtom'
import { getComment } from 'api/community'
import CommentInput from 'components/Community/atoms/CommentInput'
import CommentItem from 'components/Community/atoms/CommentItem'
import FilterItem from 'components/common/atoms/FilterItem'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { CommentListProps } from 'types/components/Community'
import dateFillter from 'utils/dateFillter'
import * as S from './style'

const CommunityContent = () => {
  const route = useRouter()
  const id = route.query.communityID ?? ''
  const [data, setData] = useRecoilState(coDetailData)
  const [page, setPage] = useRecoilState(pageNum)
  const [commentList, setCommentList] = useState<CommentListProps[]>()

  useEffect(() => {
    !!data && setData(data)
    id &&
      getComment(Number(id), page).then((res) => {
        setCommentList(res)
      })
  }, [id])

  return (
    <S.Wrapper>
      <S.PostWrapper>
        {data && (
          <>
            <S.Header>
              <h2>{data?.title}</h2>
              <p>{dateFillter(data?.created_date)}</p>
            </S.Header>
            <S.Content>
              {data?.centent?.split('\n').map((line, key) => (
                <p key={key}>
                  {line}
                  <br />
                </p>
              ))}
            </S.Content>
            <S.Tag>
              <div>
                <FilterItem
                  menu={data.tag}
                  active={`${true}`}
                  onClick={() => ''}
                />
              </div>
            </S.Tag>
          </>
        )}
      </S.PostWrapper>
      <S.CommentWrapper>
        {commentList &&
          commentList.map((e) => (
            <CommentItem
              key={e.id}
              id={e.id}
              user={e.user}
              nb={e.nb}
              date={e.date}
              centent={e.centent}
            />
          ))}
        <CommentInput id={Number(id)} />
      </S.CommentWrapper>
    </S.Wrapper>
  )
}

export default CommunityContent
