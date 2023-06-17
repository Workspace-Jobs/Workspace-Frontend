import Button from 'components/Community/atoms/Button'
import { ModalOverayWrapper } from 'components/common/atoms/ModalOverayWrapper/style'
import { Palette } from 'styles/globals'
import { ModalType } from 'types/common/Modal'
import * as S from './style'

const CencelModal = ({ modalState, setModalState }: ModalType) => {
  return (
    <>
      <ModalOverayWrapper
        isClick={modalState}
        onClick={() => setModalState(false)}
        style={{ background: 'rgba(34, 34, 34, 0.45)' }}
      >
        <S.Wrapper onClick={(e) => e.stopPropagation()}>
          <h3>정말 취소 하시겠습니까?</h3>
          <div>
            <Button
              color={Palette.NEUTRAL_N1}
              content="취소"
              onClick={() => setModalState(false)}
            />
            <Button color={Palette.SYSTEM_ERROR} content="확인" />
          </div>
        </S.Wrapper>
      </ModalOverayWrapper>
    </>
  )
}

export default CencelModal
