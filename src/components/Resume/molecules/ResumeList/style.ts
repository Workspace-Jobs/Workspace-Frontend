import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export const AddResume = styled.div`
  width: 284px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 24px 30px;
  background-color: ${Palette.BACKGROUND_BG};
  border-radius: 16px;
  cursor: pointer;

  p {
    color: ${Palette.NEUTRAL_N1};
    font-size: 16px;
    font-weight: 400;
  }
`
