import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const Wrapper = styled.div`
  width: 78%;
  height: calc(100vh - 206px);
  display: flex;
  flex-direction: column;
  gap: 40px;
  border: 1px solid ${Palette.NEUTRAL_N1};
  border-radius: 8px;
  padding: 32px;

  input,
  textarea {
    background: ${Palette.BACKGROUND_BG};
    border-radius: 8px;
    border: none;
    font-size: 24px;
    font-weight: 700;
    padding: 14px 12px;
    resize: none;
  }

  textarea {
    font-size: 16px;
    font-weight: 500;
    height: 100%;
  }
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  input {
    width: 100%;
  }
  p {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
  }
`
