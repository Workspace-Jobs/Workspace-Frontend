import * as S from './style'
import Th from 'assets/png/image.png'
import Image from 'next/image'

const Profile = () => {
  return (
    <S.Wrapper>
      <S.ProfileIMG>
        <Image
          alt="profile img"
          src={Th}
          width={80}
          height={80}
          priority={true}
        />
      </S.ProfileIMG>
      <S.SubText size="18px">손정민</S.SubText>
      <S.SubText size="14px">s21062@gsm.hs.kr</S.SubText>
    </S.Wrapper>
  )
}

export default Profile
