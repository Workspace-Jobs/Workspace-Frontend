import { apiClient } from 'utils/Libs/apiClient'
import { EmplymentController } from 'utils/Libs/requestUrls'

export const getEmployment = async (id: string) => {
  try {
    const { data } = await apiClient.get(EmplymentController.employment, {
      params: {
        page: id,
      },
    })
    return { data }
  } catch (e: any) {}
}

export const getBookmark = async (id: number) => {
  try {
    const { data } = await apiClient.get(
      EmplymentController.employmentBookmark(id),
    )
    return { data }
  } catch (e: any) {}
}

export const getJobEmployment = async (id: string, job: string) => {
  try {
    const { data } = await apiClient.get(EmplymentController.employmentJob, {
      params: {
        page: id,
        job: job,
      },
    })
    return { data }
  } catch (e: any) {}
}

export const getEmploymentDetail = async (
  id: string | string[] | undefined,
) => {
  try {
    const { data } = await apiClient.get(
      EmplymentController.employmentDetail(id),
    )
    return { data }
  } catch (e: any) {}
}
