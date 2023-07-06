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
    let state = ''
    if (status == '1') state = '지원 완료'
    if (status == '2') state = '서류 통과'
    if (status == '3') state = '최종 합격'
    if (status == '4') state = '불합격'
    getMyStatusList(state).then((res) => setList(res?.data))
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
      {statusModal && (
        <StatusModal modalState={statusModal} setModalState={setStatusModal} />
      )}
    </S.Wrapper>
  )
}

export default StatusContent
