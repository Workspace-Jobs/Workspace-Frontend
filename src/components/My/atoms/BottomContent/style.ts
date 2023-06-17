import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const Wrapper = styled.div`
  width: 100%;
  padding: 24px;
  border: 1px solid ${Palette.NEUTRAL_N1};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  p {
    font-size: 18px;
    font-weight: 700;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`
