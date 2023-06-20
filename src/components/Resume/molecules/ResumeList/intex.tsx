import * as SVG from 'assets/svg'
import ResumeItem from 'components/Resume/atoms/ResumeItem/intex'
import { ResumelistType } from 'types/components/Resume'
import * as S from './style'

const ResumeList = ({ list }: ResumelistType) => {
  return (
    <S.Wrapper>
      {list?.map((e, ind) => (
        <ResumeItem key={ind} id={e.id} user={e.user} name={e.name} />
      ))}
      <S.AddResume>
        <SVG.PlusIcon />
        <p>새로운 이력서를 추가해보세요!</p>
      </S.AddResume>
    </S.Wrapper>
  )
}
export default ResumeList
