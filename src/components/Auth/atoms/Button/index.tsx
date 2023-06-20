import { AuthBtnProps } from 'types/components/Auth'
import * as S from './style'

const Button = ({ text, type, onClick }: AuthBtnProps) => {
  return (
    <S.ButtonWrapper type={type} onClick={onClick}>
      {text}
    </S.ButtonWrapper>
  )
}

export default Button
