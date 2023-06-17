import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const Wrapper = styled.div`
  width: 100%;
  border: 1px solid ${Palette.NEUTRAL_N1};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px 0;
`

export const ProfileIMG = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  img {
    object-fit: cover;
    object-position: center;
  }
`

export const SubText = styled.div<{ size: string }>`
  font-size: ${({ size }) => size};
  font-weight: 500;
`
