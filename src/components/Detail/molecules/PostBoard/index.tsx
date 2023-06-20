import * as S from './style'
import Image from 'next/image'
import Map from 'components/Detail/atoms/Map'
import { getImgUrl } from 'utils/getImgUrl'
import { EmployDetailProps } from 'types/components/Detail'

const PostBoard = ({ detailDatas }: { detailDatas: EmployDetailProps }) => {
  const url = getImgUrl(detailDatas?.img1)

  return (
    <S.Wrapper>
      {detailDatas && (
        <>
          <S.Info>
            <S.Thumbnail>
              <Image
                alt="Thumbnail img"
                src={url}
                layout="fill"
                objectFit={'cover'}
                priority={true}
              />
            </S.Thumbnail>
            <S.TitleBox>
              {detailDatas.title}
              <S.CompanyInfoText>
                {detailDatas.user?.username}
              </S.CompanyInfoText>
            </S.TitleBox>
            <S.Description>
              {detailDatas.centent?.split('\n').map((line, key) => (
                <p key={key}>
                  {line}
                  <br />
                </p>
              ))}
            </S.Description>
          </S.Info>
          <S.DetailInfo>
            <S.DeatilText>
              <>
                <p>마감일</p>
                {detailDatas.date}
              </>
            </S.DeatilText>
            <S.DeatilText>
              <>
                <p>근무지역</p>
                {detailDatas.user?.location}
              </>
            </S.DeatilText>
            <Map latitude={35.1467133} longitude={126.8473116} />
          </S.DetailInfo>
        </>
      )}
    </S.Wrapper>
  )
}

export default PostBoard
