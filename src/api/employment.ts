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
  } catch (e: any) {
    console.log(e)
  }
}

export const getBookmark = async (id: number) => {
  try {
    const { data } = await apiClient.get(
      EmplymentController.employmentBookmark(id),
    )
    return { data }
  } catch (e: any) {
    console.log(e)
  }
}
