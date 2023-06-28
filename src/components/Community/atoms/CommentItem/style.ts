import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: 16px;
    font-weight: 300;
    :first-child {
      font-weight: 900;
    }
  }
`

export const Content = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin: 32px 0;
  padding-bottom: 16px;
  border-bottom: 1px solid ${Palette.NEUTRAL_N1};
`
