import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const Wrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 80px;
`

export const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 490px;
  border-radius: 0.5rem;
  overflow: hidden;
`

export const TitleBox = styled.div`
  font-size: 22px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const CompanyInfoText = styled.div`
  font-size: 14px;
  font-weight: 500;
  display: flex;
  gap: 10px;
  p {
    padding-left: 10px;
    border-left: 1px solid ${Palette.NEUTRAL_N1};
    color: ${Palette.NEUTRAL_N1};
  }
`

export const Description = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 40px;
`

export const DetailInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 40px 0;
  border-top: 1px solid #000;
`

export const DeatilText = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  font-weight: 500;
  p {
    color: ${Palette.NEUTRAL_N1};
  }
`
