import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const Wrapper = styled.div`
  position: absolute;
  top: 40px;
  max-width: 70%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 24px;
  background-color: ${Palette.WHITE};
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  z-index: 3;
`
