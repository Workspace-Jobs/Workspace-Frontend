import Header from 'components/common/molecules/Header'
import Detail from 'components/Detail/organisms/Detail'
import { GetServerSideProps } from 'next'
import { EmployDetailProps } from 'types/components/Detail'
import { apiClient } from 'utils/Libs/apiClient'
import { EmplymentController } from 'utils/Libs/requestUrls'

const DetailPage = ({ detailData }: { detailData: EmployDetailProps }) => {
  return (
    <>
      <Header />
      <Detail detailDatas={detailData} />
    </>
  )
}

export default DetailPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.query.postingID

  try {
    const { data } = await apiClient.get(
      EmplymentController.employmentDetail(id),
    )
    return { props: { detailData: data } }
  } catch (e) {
    return { props: { detailData: null } }
  }
}
