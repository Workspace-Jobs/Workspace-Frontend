import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Palette.BACKGROUND_BG};
`

export const AuthFormWrapper = styled.div`
  width: 440px;
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 48px;
  border-radius: 16px;
  background: ${Palette.WHITE};
`

export const InputsWrapper = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  p {
    font-size: 14px;
    font-weight: 400;
    color: #000000;
  }
`

export const BottonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

export const BottomText = styled.div`
  color: ${Palette.NEUTRAL_N1};
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`
