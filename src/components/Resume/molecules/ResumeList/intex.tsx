import * as S from './style'
import * as SVG from 'assets/svg'
import ResumeItem from 'components/Resume/atoms/ResumeItem/intex'

const ResumeList = () => {
  return (
    <S.Wrapper>
      <ResumeItem />
      <ResumeItem />
      <ResumeItem />
      <ResumeItem />
      <ResumeItem />
      <ResumeItem />
      <S.AddResume>
        <SVG.PlusIcon />
        <p>새로운 이력서를 추가해보세요!</p>
      </S.AddResume>
    </S.Wrapper>
  )
}
export default ResumeList
