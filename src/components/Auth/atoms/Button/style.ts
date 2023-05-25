import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const ButtonWrapper = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: ${Palette.PRIMARY_P1};
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`
