import * as S from './style'
import InfoBox from 'components/Detail/atoms/InfoBox'
import ApplyBox from 'components/Detail/atoms/ApplyBox'

const ApplyBoard = () => {
  return <S.Wrapper>{true ? <InfoBox /> : <ApplyBox />}</S.Wrapper>
}

export default ApplyBoard
