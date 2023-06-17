import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const Wrapper = styled.div`
  width: 462px;
  padding: 32px;
  background-color: ${Palette.WHITE};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 35px;

  p {
    font-size: 14px;
    font-weight: 500;
  }
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  svg {
    cursor: pointer;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
`

export const Info = styled.div`
  width: 100%;
  display: flex;
  > :first-child {
    width: 25%;
    color: ${Palette.NEUTRAL_N1};
  }
`
