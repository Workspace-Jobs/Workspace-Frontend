import * as S from './style'
import StatusModal from '../StatusModal'
import { useEffect, useState } from 'react'
import { getMyStatusList } from 'api/my'
import { useRecoilValue } from 'recoil'
import { statusValue } from 'Atoms/recoilAtom'
import { StatusListProps } from 'types/components/My'
import dateFillter from 'utils/dateFillter'

const StatusContent = () => {
  const [statusModal, setStatusModal] = useState(false)
  const status = useRecoilValue(statusValue)
  const [list, setList] = useState<StatusListProps[]>()
  useEffect(() => {
    getMyStatusList('지원 현황').then((res) => setList(res?.data))
  }, [status])

  return (
    <S.Wrapper>
      <S.Header>
        <S.ItemWrapper>
          <S.SubText>지원 회사</S.SubText>
          <S.SubText width={true}>지원 포지션</S.SubText>
          <S.SubText>지원 날짜</S.SubText>
        </S.ItemWrapper>
      </S.Header>
      {list &&
        list.map((e, ind) => (
          <S.ItemWrapper
            key={ind}
            style={{ cursor: 'pointer' }}
            onClick={() => setStatusModal(true)}
          >
            <S.SubText>{e.employment.user}</S.SubText>
            <S.SubText width={true}>{e.employment.title}</S.SubText>
            <S.SubText>{dateFillter(e.date)}</S.SubText>
          </S.ItemWrapper>
        ))}
      {[0, 0, 0].map((e, ind) => (
        <S.ItemWrapper
          key={ind}
          style={{ cursor: 'pointer' }}
          onClick={() => setStatusModal(true)}
        >
          <S.SubText>여보야</S.SubText>
          <S.SubText width={true}>React 프론트엔드 개발자</S.SubText>
          <S.SubText>2023.03.03</S.SubText>
        </S.ItemWrapper>
      ))}
      {statusModal && (
        <StatusModal modalState={statusModal} setModalState={setStatusModal} />
      )}
    </S.Wrapper>
  )
}

export default StatusContent
