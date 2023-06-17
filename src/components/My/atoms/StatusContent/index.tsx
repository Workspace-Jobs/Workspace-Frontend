import * as S from './style'
import StatusModal from '../StatusModal'
import { useState } from 'react'

const StatusContent = () => {
  const [statusModal, setStatusModal] = useState(false)

  return (
    <S.Wrapper>
      <S.Header>
        <S.ItemWrapper>
          <S.SubText>지원 회사</S.SubText>
          <S.SubText width={true}>지원 포지션</S.SubText>
          <S.SubText>지원 날짜</S.SubText>
        </S.ItemWrapper>
      </S.Header>
      {[0, 0, 0, 0, 0].map((e, ind) => (
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
