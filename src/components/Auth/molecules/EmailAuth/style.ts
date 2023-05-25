import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 170px;
  a {
    width: 100%;
    text-decoration: none;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 50px;
`

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
`

export const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
`

export const Caution = styled.div`
  color: ${Palette.NATURAL_N1};
  font-size: 14px;
  font-weight: 400;
`
