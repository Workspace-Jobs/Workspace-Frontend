import { userName, userProfile } from 'Atoms/recoilAtom'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'
import * as S from './style'

const Profile = () => {
  const userImg = useRecoilValue(userProfile)
  const name = useRecoilValue(userName)

  return (
    <S.Wrapper>
      <S.ProfileIMG>
        <Image
          alt="profile img"
          src={userImg}
          width={80}
          height={80}
          layout="fill"
          priority={true}
        />
      </S.ProfileIMG>
      <S.SubText size="18px">{name}</S.SubText>
    </S.Wrapper>
  )
}

export default Profile
