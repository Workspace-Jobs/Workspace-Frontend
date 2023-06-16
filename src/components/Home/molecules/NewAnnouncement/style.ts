import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const Section = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Palette.PRIMARY_P3};
`
export const Wrapper = styled.div`
  width: 1200px;
  padding: 55px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
`

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
