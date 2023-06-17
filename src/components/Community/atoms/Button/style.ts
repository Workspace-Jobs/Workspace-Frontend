import styled from '@emotion/styled'
import { Palette } from 'styles/globals'
import { ButtonStyleProps } from 'types/components/Community'

export const Wrapper = styled.button<ButtonStyleProps>`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 2px solid
    ${({ color, active }) => (active ? Palette.PRIMARY_P1 : color)};
  color: ${({ color, active }) => (active ? Palette.WHITE : color)};
  background-color: ${({ active }) =>
    active ? Palette.PRIMARY_P1 : Palette.WHITE};
  font-size: 16px;
  font-weight: 700;
  svg {
    path {
      fill: ${({ active, color }) => (active ? Palette.WHITE : color)};
    }
  }
`
