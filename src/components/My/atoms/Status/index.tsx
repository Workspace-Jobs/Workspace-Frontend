import * as S from './style'
import { useRecoilState } from 'recoil'
import { statusValue } from 'Atoms/recoilAtom'

const Status = () => {
  const [status, setStatus] = useRecoilState(statusValue)

  return (
    <S.Wrapper>
      <p>지원현황</p>
      <S.StatusWrapper>
        <S.StatusItem
          onClick={() => setStatus('1')}
          state={`${status === '1'}`}
        >
          <h1>9</h1>
          <p>지원 완료</p>
        </S.StatusItem>
        <S.StatusItem
          onClick={() => setStatus('2')}
          state={`${status === '2'}`}
        >
          <h1>9</h1>
          <p>서류 통과</p>
        </S.StatusItem>
        <S.StatusItem
          onClick={() => setStatus('3')}
          state={`${status === '3'}`}
        >
          <h1>9</h1>
          <p>최종 합격</p>
        </S.StatusItem>
        <S.StatusItem
          onClick={() => setStatus('4')}
          state={`${status === '4'}`}
        >
          <h1>0</h1>
          <p>불합격</p>
        </S.StatusItem>
      </S.StatusWrapper>
    </S.Wrapper>
  )
}

export default Status
