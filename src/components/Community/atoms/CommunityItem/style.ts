import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const Wrapper = styled.div`
  width: 100%;
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${Palette.NEUTRAL_N1};
  cursor: pointer;
`

export const SubText = styled.div<{ size: string }>`
  width: ${({ size }) => (size == '16px' ? '70%' : '')};
  font-size: ${({ size }) => size};
  font-weight: 500;
`
