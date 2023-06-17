import * as S from './style'
import Status from 'components/My/atoms/Status'
import BottomContent from 'components/My/atoms/BottomContent'
import { useRecoilValue } from 'recoil'
import { statusValue } from 'Atoms/recoilAtom'
import StatusContent from 'components/My/atoms/StatusContent'

const MyContent = () => {
  const status = useRecoilValue(statusValue)

  return (
    <S.Wrapper>
      <Status />
      {status == '0' ? <BottomContent /> : <StatusContent />}
    </S.Wrapper>
  )
}

export default MyContent
