import * as S from './style'

const ResumeItem = ({
  item,
  onClick,
  active,
}: {
  item: string
  onClick: () => void
  active: boolean
}) => {
  return (
    <S.Label htmlFor={item} checked={active}>
      <S.Input
        defaultChecked={item === '1'}
        type="radio"
        name="resume"
        id={item}
        onClick={onClick}
      />
      <S.InfoWrapper>
        이력서 제목<small>2023.03.03</small>
      </S.InfoWrapper>
    </S.Label>
  )
}

export default ResumeItem
