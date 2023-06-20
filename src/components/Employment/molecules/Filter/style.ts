import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
  position: relative;
`

export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  padding-right: 30px;
  border-right: 2px solid ${Palette.NEUTRAL_N1};
`

export const FilterName = styled.div`
  font-size: 24px;
  font-weight: 400;
`

export const FilterBtn = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ active }) => (active ? 'rotate(0deg)' : 'rotate(180deg)')};
  transition: 0.3s all ease-in-out;
  cursor: pointer;
`
