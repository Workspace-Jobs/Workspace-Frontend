import {
  coContent,
  coDetailData,
  coTitle,
  isCommunityModify,
  isCommunityWrite,
  likeState,
  postFilterMenu,
  userId,
} from 'Atoms/recoilAtom'
import {
  delCommunity,
  getCommunityLike,
  postCommunity,
  putCommunity,
} from 'api/community'
import Button from 'components/Community/atoms/Button'
import Profile from 'components/common/molecules/Profile'
import { useRouter } from 'next/router'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { Palette } from 'styles/globals'
import * as S from './style'

const LeftContent = ({ state }: { state?: string }) => {
  const router = useRouter()
  const [communityWrite, setCommunityWrite] = useRecoilState(isCommunityWrite)
  const data = useRecoilValue(coDetailData)
  const [like, setLike] = useRecoilState(likeState)
  const title = useRecoilValue(coTitle)
  const content = useRecoilValue(coContent)
  const id = useRecoilValue(userId)
  const filterMenu = useRecoilValue(postFilterMenu)
  const [modift, setModify] = useRecoilState(isCommunityModify)
  const [info, setInfo] = useRecoilState(coDetailData)

  const onSubmit = async () => {
    modift && info
      ? await putCommunity(info.id, title, content, filterMenu)
      : await postCommunity(title, content, filterMenu)

    setCommunityWrite(false)
    setInfo(null)
    router.push('/community')
  }

  const onDelete = async () => {
    if (await delCommunity(data?.id)) return router.push('/community')
  }

  return (
    <S.Wrapper>
      <Profile />
      <S.BtnWrapper>
        {communityWrite ? (
          <>
            <Button
              color={Palette.PRIMARY_P1}
              content="확인"
              onClick={() => {
                onSubmit()
              }}
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
                  active={data?.good_bool}
                  onClick={() =>
                    getCommunityLike(data?.id).then(() => {
                      setLike(!like)
                    })
                  }
                />
                {String(data?.user) == id && (
                  <>
                    <Button
                      color={Palette.PRIMARY_P1}
                      content="수정하기"
                      onClick={() => {
                        setCommunityWrite(true)
                        setModify(true)
                      }}
                    />
                    <Button
                      color={Palette.SYSTEM_ERROR}
                      content="삭제하기"
                      onClick={() => onDelete()}
                    />
                  </>
                )}
              </>
            ) : (
              <Button
                content="작성하기"
                color={Palette.PRIMARY_P1}
                onClick={() => {
                  setCommunityWrite(true)
                  setInfo(null)
                }}
              />
            )}
          </>
        )}
      </S.BtnWrapper>
    </S.Wrapper>
  )
}
export default LeftContent
