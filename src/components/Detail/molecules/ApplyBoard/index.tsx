import { applyState } from 'Atoms/recoilAtom'
import ApplyBox from 'components/Detail/atoms/ApplyBox'
import InfoBox from 'components/Detail/atoms/InfoBox'
import { useRecoilValue } from 'recoil'
import * as S from './style'
import { EmployDetailProps } from 'types/components/Detail'

const ApplyBoard = ({ detailDatas }: { detailDatas: EmployDetailProps }) => {
  const state = useRecoilValue(applyState)
  return (
    <S.Wrapper>
      {state ? (
        <InfoBox
          title={detailDatas?.title}
          support_boool={detailDatas?.support_bool}
        />
      ) : (
        <ApplyBox />
      )}
    </S.Wrapper>
  )
}

export default ApplyBoard
