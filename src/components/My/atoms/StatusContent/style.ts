import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  width: 100%;
  border-bottom: 3px solid ${Palette.PRIMARY_P1};
`

export const ItemWrapper = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${Palette.NEUTRAL_N1};
`

export const SubText = styled.div<{ width?: boolean }>`
  width: 20%;
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  margin-left: ${({ width }) => (width ? '-300px' : '')};
`
