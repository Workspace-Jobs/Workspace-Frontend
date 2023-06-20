import { apiClient } from 'utils/Libs/apiClient'
import { ResumeController } from 'utils/Libs/requestUrls'

export const getResume = async () => {
  try {
    const { data } = await apiClient.get(ResumeController.resume)
    return { data }
  } catch (e: any) {}
}

export const getResumeDetail = async (id: number) => {
  try {
    const { data } = await apiClient.get(ResumeController.getResume(id))
    return { data }
  } catch (e: any) {}
}

export const putResume = async (name: number, file: Pbkdf2Params) => {
  try {
    const { data } = await apiClient.post(ResumeController.resume, {
      name: name,
    })
    return { data }
  } catch (e: any) {}
}
