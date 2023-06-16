import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const Wrapper = styled.div`
  position: sticky;
  top: 80px;
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border: 1px solid ${Palette.NEUTRAL_N1};
  border-radius: 8px;
`

export const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
`

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const BookmarkBtn = styled.button`
  width: 100%;
  height: 48px;
  font-size: 16px;
  font-weight: 700;
  color: ${Palette.PRIMARY_P1};
  background: ${Palette.WHITE};
  border: 2px solid ${Palette.PRIMARY_P1};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  svg {
    path {
      fill: ${Palette.PRIMARY_P1};
    }
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
`

export const SmallText = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${Palette.NEUTRAL_N1};
  font-size: 12px;
  font-weight: 500;
`
