import { ResumeListProps } from 'types/components/Resume'
import * as S from './style'
import { getResumeDetail } from 'api/resume'

const ResumeItem = ({ id, user, name }: ResumeListProps) => {
  const ru = () => {
    getResumeDetail(id).then((res) => {
      console.log(res)
    })
  }
  return (
    <S.Wrapper onClick={() => ru()}>
      <h3>{name}</h3>
    </S.Wrapper>
  )
}
export default ResumeItem
