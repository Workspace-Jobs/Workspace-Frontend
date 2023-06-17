import Button from 'components/Community/atoms/Button'
import Profile from '../Profile'
import * as S from './style'
import { Palette } from 'styles/globals'
import { useRecoilState } from 'recoil'
import { isCommunityWrite } from 'Atoms/recoilAtom'

const LeftContent = ({ state }: { state?: string }) => {
  const [communityWrite, setCommunityWrite] = useRecoilState(isCommunityWrite)

  return (
    <S.Wrapper>
      <Profile />
      <S.BtnWrapper>
        {communityWrite ? (
          <>
            <Button
              color={Palette.PRIMARY_P1}
              content="확인"
              onClick={() => setCommunityWrite(false)}
            />
            <Button
              color={Palette.NEUTRAL_N1}
              content="취소"
              onClick={() => setCommunityWrite(false)}
            />
          </>
        ) : (
          <>
            {state == 'detail' ? (
              <>
                <Button
                  color={Palette.NEUTRAL_N1}
                  content="좋아요"
                  active={true}
                />
                {true && (
                  <>
                    <Button color={Palette.PRIMARY_P1} content="수정하기" />
                    <Button color={Palette.SYSTEM_ERROR} content="삭제하기" />
                  </>
                )}
              </>
            ) : (
              <Button
                content="작성하기"
                color={Palette.PRIMARY_P1}
                onClick={() => setCommunityWrite(true)}
              />
            )}
          </>
        )}
      </S.BtnWrapper>
    </S.Wrapper>
  )
}
export default LeftContent
