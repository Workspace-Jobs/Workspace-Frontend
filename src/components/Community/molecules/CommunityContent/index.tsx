import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import * as S from './style'
import { coDetailData } from 'Atoms/recoilAtom'
import dateFillter from 'utils/dateFillter'
import { useEffect } from 'react'
import FilterItem from 'components/common/atoms/FilterItem'

const CommunityContent = () => {
  const [data, setData] = useRecoilState(coDetailData)

  useEffect(() => {
    !!data && setData(data)
  })

  return (
    <S.Wrapper>
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
    </S.Wrapper>
  )
}

export default CommunityContent
