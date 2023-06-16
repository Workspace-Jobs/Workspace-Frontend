import * as S from './style'
import Image from 'next/image'
import Th from 'assets/png/image.png'
import Map from 'components/Detail/atoms/Map'

const PostBoard = () => {
  return (
    <S.Wrapper>
      <S.Info>
        <S.Thumbnail>
          <Image
            alt="Thumbnail img"
            src={Th}
            layout="fill"
            objectFit={'cover'}
            priority={true}
          />
        </S.Thumbnail>
        <S.TitleBox>
          React 프론트엔드 개발자
          <S.CompanyInfoText>
            여보야 <p>광주</p>
          </S.CompanyInfoText>
        </S.TitleBox>
        <S.Description>
          인연과 인연을 잇는, 상품과 소비자를 잇는, 나아가 사람과 콘텐츠를 있는
          플랫폼! <br />
          여러분들과 함께 만들어갈 행복한 세상을 꿈꾸는 회사! <br />
          ㈜여보야는 결혼포털플랫폼, 라이브방송플랫폼, 커뮤니티플랫폼을
          자체적으로 개발하고 서비스하는, <br />
          IT업계 20년 이상의 업력과 기술력 및 경쟁력을 갖춘 광주광역시 최대
          모바일 콘텐츠 기업입니다.
          <br />
          <br /> 국가 저출산정책에도 부흥하는 혁신적인 결혼중심 서비스인 여보야
          <br />
          언제 어디서든 라이브방송이 가능한 달라, 국내 최대의 커뮤니티
          `club5678`
          <br />
          <br />
          * 회사홈페이지 : www.yeoboyacorp.com <br />
          * 여보야 모바일: 구글 스토어, 애플 앱스토어 에서 `여보야` 검색
          <br />
          * 여보야 웹: m.yeoboya.com 또는 www.yeoboya.com <br />
          * 달라 모바일: 구글 스토어, 애플 앱스토어 에서 `달라` 검색 <br />
          *달라 웹: m.dallalive.com 또는 www.dallalive.com
        </S.Description>
      </S.Info>
      <S.DetailInfo>
        <S.DeatilText>
          <p>마감일</p>2023.04.26
        </S.DeatilText>
        <S.DeatilText>
          <p>근무지역</p>광주 서구 상무대로 773, 4층
        </S.DeatilText>
        <Map latitude={35.1467133} longitude={126.8473116} />
      </S.DetailInfo>
    </S.Wrapper>
  )
}

export default PostBoard
