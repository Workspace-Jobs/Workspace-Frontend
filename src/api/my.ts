import { apiClient } from 'utils/Libs/apiClient'
import { MyController } from 'utils/Libs/requestUrls'

export const getMyInfo = async () => {
  try {
    const { data } = await apiClient.get(MyController.profile)
    return { data }
  } catch (e: any) {}
}

export const getMyStatus = async () => {
  try {
    const { data } = await apiClient.get(MyController.myStatus)
    return { data }
  } catch (e: any) {}
}

export const getMyStatusList = async (state: string) => {
  try {
    const { data } = await apiClient.get(MyController.myStatusList, {
      params: { state: state },
    })
    return { data }
  } catch (e: any) {}
}

export const getMyBookmarkList = async () => {
  try {
    const { data } = await apiClient.get(MyController.bookmarkList)
    return { data }
  } catch (e: any) {}
}

export const getMyLikeList = async () => {
  try {
    const { data } = await apiClient.get(MyController.likeList)
    return { data }
  } catch (e: any) {}
}
