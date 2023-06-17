import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const Wrapper = styled.div`
  width: 78%;
  height: calc(100vh - 206px);
  display: flex;
  flex-direction: column;
  gap: 40px;
  border: 1px solid ${Palette.NEUTRAL_N1};
  border-radius: 8px;
  padding: 32px;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  p {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
  }
`

export const Content = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
