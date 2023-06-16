import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const FilterItem = styled.div<{ active: 'true' | 'false' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 10px;
  border-radius: 20px;
  background-color: ${({ active }) =>
    active == 'true' ? Palette.WHITE : Palette.BACKGROUND_BG};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid
    ${({ active }) =>
      active == 'true' ? Palette.PRIMARY_P1 : Palette.BACKGROUND_BG};
`
