import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  p {
    font-size: 16px;
    font-weight: 900;
  }
  textarea {
    height: 160px;
    resize: none;
    border-radius: 8px;
    padding: 16px;
    border-color: ${Palette.PRIMARY_P1};
  }
`

export const Button = styled.button`
  width: 100px;
  padding: 8px 0;
  border-radius: 50px;
  border: none;
  background-color: ${Palette.PRIMARY_P1};
  color: white;
  font-size: 14px;
  font-weight: 700;
`
