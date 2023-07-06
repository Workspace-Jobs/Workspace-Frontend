import Community from 'components/Community/organisms/Community'
import Header from 'components/common/molecules/Header'
import { GetServerSideProps } from 'next'
import { getToken } from 'utils/Libs/getToken'

const CommunityPage = () => {
  return (
    <>
      <Header />
      <Community />
    </>
  )
}

export default CommunityPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Authorization } = await getToken(ctx)

  if (!Authorization) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    }
  }
  try {
    return { props: {} }
  } catch (e) {
    return { props: {} }
  }
}
