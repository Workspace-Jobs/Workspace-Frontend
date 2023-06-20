import { applyState } from 'Atoms/recoilAtom'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useSetRecoilState } from 'recoil'
import { ApplyBoxProps } from 'types/components/Detail'
import ResumeItem from '../ResumeItem'
import * as S from './style'

const ApplyBox = () => {
  const setState = useSetRecoilState(applyState)
  const { register, handleSubmit } = useForm<ApplyBoxProps>()

  const onSubmit: SubmitHandler<ApplyBoxProps> = async (e) => {
    toast.success('지원되었습니다.')
  }
  const onError: SubmitErrorHandler<ApplyBoxProps> = (e) => {
    toast.error(e.email?.message || e.phone?.message)
  }

  return (
    <S.Wrapper>
      <S.Header onClick={() => setState(true)}>
        <p>뒤로</p>지원하기
      </S.Header>
      <S.InfoWrapper>
        <S.Title>지원정보</S.Title>
        <S.UserInputWrapper>
          <S.UserInput>
            <p>이름</p>
            <input />
          </S.UserInput>
          <S.UserInput>
            <p>이메일</p>
            <input
              {...register('email', {
                required: {
                  value: true,
                  message: '이름을 입력해 주세요',
                },
              })}
            />
          </S.UserInput>
          <S.UserInput>
            <p>연락처</p>
            <input
              {...register('phone', {
                required: {
                  value: true,
                  message: '전화번호를 입력해 주세요',
                },
              })}
            />
          </S.UserInput>
        </S.UserInputWrapper>
      </S.InfoWrapper>
      <S.InfoWrapper>
        <S.Title>이력서</S.Title>
        <S.UserInputWrapper>
          {['1', '2', '3'].map((i, e) => (
            <ResumeItem key={e} item={i} onClick={() => ''} active={i == '1'} />
          ))}
          <S.ApplyBtn onClick={handleSubmit(onSubmit, onError)}>
            지원하기
          </S.ApplyBtn>
        </S.UserInputWrapper>
      </S.InfoWrapper>
    </S.Wrapper>
  )
}

export default ApplyBox
