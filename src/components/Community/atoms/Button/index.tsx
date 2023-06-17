import { ButtonStyleProps } from 'types/components/Community'
import * as S from './style'
import * as SVG from 'assets/svg'

const Button = ({ active, content, color, onClick }: ButtonStyleProps) => {
  return (
    <S.Wrapper active={active} color={color} onClick={onClick}>
      {active != undefined && <SVG.LikeIcon />}
      {content}
    </S.Wrapper>
  )
}

export default Button
