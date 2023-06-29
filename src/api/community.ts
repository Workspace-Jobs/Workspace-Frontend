import { toast } from 'react-toastify'
import { apiClient } from 'utils/Libs/apiClient'
import { CommunityController } from 'utils/Libs/requestUrls'

export const getCommunityList = async (id: string) => {
  try {
    const { data } = await apiClient.get(CommunityController.getCommunityList, {
      params: {
        page: id,
      },
    })
    return { data }
  } catch (e: any) {}
}

export const getTagCommunityList = async (id: string, tag: string) => {
  try {
    const { data } = await apiClient.get(CommunityController.tagCommunity, {
      params: {
        tag: tag,
        page: id,
      },
    })
    return { data }
  } catch (e: any) {}
}

export const getCommunityDetail = async (id: string | string[]) => {
  try {
    const { data } = await apiClient.get(CommunityController.community(id))
    return { data }
  } catch (e: any) {}
}

export const getCommunityLike = async (id: number | undefined) => {
  try {
    const { data } = await apiClient.get(CommunityController.likeCommunity(id))
    return { data }
  } catch (e: any) {}
}

export const postCommunity = async (
  title: string | undefined,
  content: string | undefined,
  tag: string | undefined,
) => {
  try {
    const { data } = await apiClient.post(CommunityController.postCommunity, {
      title: title,
      centent: content,
      tag: tag,
    })
    toast.success(data.message)
    return { data }
  } catch (e: any) {
    if (e.message === 'Request failed with status code 400') {
      toast.warning('글을 적어주세요.')
    }
    return false
  }
}
export const putCommunity = async (
  id: number | undefined,
  title: string | undefined,
  content: string | undefined,
  tag: string | undefined,
) => {
  try {
    const { data } = await apiClient.put(CommunityController.community(id), {
      title: title,
      centent: content,
      tag: tag,
    })
    toast.success(data.message)
    return { data }
  } catch (e: any) {
    if (e.message === 'Request failed with status code 400') {
      toast.warning('글을 적어주세요.')
    }
    return false
  }
}

export const delCommunity = async (id: number | undefined) => {
  try {
    const { data } = await apiClient.delete(CommunityController.community(id))
    toast.success('삭제되었습니다.')
    return { data }
  } catch (e: any) {
    return false
  }
}

export const getComment = async (id: number | undefined, page: string) => {
  try {
    const { data } = await apiClient.get(CommunityController.comment(id), {
      params: {
        page: page,
      },
    })
    return data
  } catch (e: any) {
    return false
  }
}

export const postComment = async (id: number, content: string | undefined) => {
  try {
    const { data } = await apiClient.post(CommunityController.comment(id), {
      centent: content,
    })
    toast.success('등록되었습니다')
    return { data }
  } catch (e: any) {
    return false
  }
}
