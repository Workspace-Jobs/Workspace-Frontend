import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const Wrapper = styled.div`
  width: 320px;
  padding: 24px;
  background-color: ${Palette.WHITE};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.25);

  > div {
    display: flex;
    gap: 8px;
  }
`
