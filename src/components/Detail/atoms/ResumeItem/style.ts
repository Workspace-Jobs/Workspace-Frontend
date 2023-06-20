import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const Label = styled.label<{ checked: boolean }>`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  border: 1px solid
    ${({ checked }) => (checked ? Palette.PRIMARY_P1 : Palette.NEUTRAL_N1)};
  border-radius: 8px;
  cursor: pointer;
`
export const Input = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  border: 1px solid ${Palette.BLACK};
  background-color: ${Palette.WHITE};
  margin: 0 32px 0 16px;

  &:checked {
    border: 4px solid ${Palette.PRIMARY_P1};
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 12px;
  font-weight: 600;
`
