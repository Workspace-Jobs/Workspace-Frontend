import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const Wrapper = styled.div`
  width: 230px;
  height: 280px;
  padding: 24px;
  background: #fff;
  border: 1px solid #eaedf4;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 45px;
  cursor: pointer;
`
export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
`
export const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
`
export const Location = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${Palette.NEUTRAL_N1};
`

export const D_Day = styled.div`
  width: 30px;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  padding: 4px;
  background: ${Palette.PRIMARY_P3};
`
