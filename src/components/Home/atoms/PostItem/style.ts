import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const Wrapper = styled.div`
  width: 285px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
`

export const Thumbnail = styled.div`
  width: 100%;
  height: 200px;
  img {
    border-radius: 8px;
  }
`

export const ItemContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0;
`

export const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
`
export const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
`
export const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${Palette.NEUTRAL_N1};
`

export const Bookmark = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 2;
`
