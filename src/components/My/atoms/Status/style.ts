import styled from '@emotion/styled'
import { Palette } from 'styles/globals'
import { MenuStateType } from 'types/components/Header'

export const Wrapper = styled.div`
  width: 100%;
  padding: 24px;
  border: 1px solid ${Palette.NEUTRAL_N1};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  p {
    font-size: 18px;
    font-weight: 700;
  }
`

export const StatusWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

export const StatusItem = styled.div<MenuStateType>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ state }) =>
    state == 'true' ? Palette.PRIMARY_P1 : Palette.BLACK};
  gap: 10px;
  padding: 0 20px;
  cursor: pointer;
  p {
    font-weight: 500;
  }
`
