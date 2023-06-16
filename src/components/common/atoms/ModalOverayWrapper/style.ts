import styled from '@emotion/styled'
import { ModalStyleProps } from 'types/common/Modal'

export const ModalOverayWrapper = styled.div<ModalStyleProps>`
  visibility: ${(isClick) => (isClick ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`
