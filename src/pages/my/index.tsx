import My from 'components/My/organisms/My'
import Header from 'components/common/molecules/Header'
import { GetServerSideProps } from 'next'
import { getToken } from 'utils/Libs/getToken'

const MyPage = () => {
  return (
    <>
      <Header />
      <My />
    </>
  )
}

export default MyPage

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
