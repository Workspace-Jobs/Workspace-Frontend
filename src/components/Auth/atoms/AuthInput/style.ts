import styled from '@emotion/styled'
import { Palette } from 'styles/globals'

export const AuthInput = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 325px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${Palette.WHITE};
    color: ${Palette.BLACK};
    font-size: 14px;
    font-weight: 500;
    border: none;
    border-bottom: 1px solid #000000;
    transition: all 0.3s all;
    padding-left: 15px;
    ::placeholder {
      color: ${Palette.NEUTRAL_N1};
    }
    :-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px ${Palette.WHITE} inset !important;
      -webkit-text-fill-color: ${Palette.BLACK} !important;
    }
  }

  svg {
    position: absolute;
    top: 15px;
    right: 13px;
    cursor: pointer;
  }
`
