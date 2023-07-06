import Header from 'components/common/molecules/Header'
import Resume from 'components/Resume/organisms/Resume'
import { GetServerSideProps } from 'next'
import { getToken } from 'utils/Libs/getToken'

const ResumePage = () => {
  return (
    <>
      <Header />
      <Resume />
    </>
  )
}

export default ResumePage

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
