import * as S from './style'
import * as SVG from 'assets/svg'
import Button from 'components/Community/atoms/Button'
import { ModalOverayWrapper } from 'components/common/atoms/ModalOverayWrapper/style'
import { useState } from 'react'
import { Palette } from 'styles/globals'
import { ModalType } from 'types/common/Modal'
import CencelModal from '../CencelModal'

const StatusModal = ({ modalState, setModalState }: ModalType) => {
  const [cancelModal, setCencelModal] = useState(false)

  return (
    <>
      <ModalOverayWrapper
        isClick={modalState}
        onClick={() => setModalState(false)}
        style={{ background: 'rgba(34, 34, 34, 0.45)' }}
      >
        <S.Wrapper onClick={(e) => e.stopPropagation()}>
          <S.Header>
            지원서
            <SVG.XIcon onClick={() => setModalState(false)} />
          </S.Header>
          <S.Title>
            <h1>React 프론트엔드 개발자</h1>
            <p>여보야</p>
          </S.Title>
          <S.InfoWrapper>
            <S.Info>
              <p>이름</p>
              <p>손정민</p>
            </S.Info>
            <S.Info>
              <p>이메일</p>
              <p>s21062@gsm.hs.kr</p>
            </S.Info>
            <S.Info>
              <p>연락처</p>
              <p>01011112222</p>
            </S.Info>
            <S.Info>
              <p>이력서</p>
              <p>이력서파일</p>
            </S.Info>
          </S.InfoWrapper>
          <Button
            color={Palette.SYSTEM_ERROR}
            content="지원취소"
            onClick={() => setCencelModal(true)}
          />
        </S.Wrapper>
      </ModalOverayWrapper>
      {cancelModal && (
        <CencelModal modalState={cancelModal} setModalState={setCencelModal} />
      )}
    </>
  )
}

export default StatusModal
