import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const Wrapper = styled.div`
  position: sticky;
  top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  border: 1px solid ${Palette.NEUTRAL_N1};
  border-radius: 8px;
`

export const Header = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid #000;

  p {
    color: ${Palette.NEUTRAL_N1};
    position: absolute;
    left: 16px;
    cursor: pointer;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Title = styled.div`
  border-left: 2px solid ${Palette.PRIMARY_P2};
  padding-left: 10px;
  font-size: 16px;
  font-weight: 700;
`

export const UserInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 500;
`

export const UserInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  p {
    width: 30%;
  }
  input {
    width: 70%;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${Palette.BLACK};
    font-size: 14px;
    font-weight: 500;
    background-color: ${Palette.WHITE};
    border: none;
    border-bottom: 1px solid ${Palette.BLACK};
  }
`

export const ApplyBtn = styled.button`
  width: 100%;
  height: 48px;
  font-size: 16px;
  font-weight: 700;
  color: ${Palette.WHITE};
  background: ${Palette.PRIMARY_P1};
  border: 2px solid ${Palette.PRIMARY_P1};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`
